import {
  Chord, Ribbon
} from '@visx/chord';
import { Group } from '@visx/group';
import { Arc } from "@visx/shape";
import { useEffect, useMemo, useState } from 'react';
import { useQueries, useQuery } from 'react-query';

export default function Graph() {
  const [roles, setRoles] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [qualifications, setQualifications] = useState([]);

  const queryResults = useQueries(
    [
      {
        queryKey: 'roles_graph',
        queryFn: () => fetch('/api/roles').then((response) => response.json()),
      },
      {
        queryKey: 'candidates_graph',
        queryFn: () => fetch('/api/candidates').then((response) => response.json()),
      },
      {
        queryKey: 'qualifications_graph',
        queryFn: () => fetch('/api/qualifications').then((response) => response.json()),
      },
    ],
  );
  
  const hasData = useMemo(() => {
    return queryResults[0].isSuccess && queryResults[1].isSuccess && queryResults[2].isSuccess;
  }, [queryResults]);

  useEffect(() => {
    if (hasData) {
      setRoles(queryResults[0].data);
      setCandidates(queryResults[1].data);
      setQualifications(queryResults[2].data);
    }
  }, [hasData, queryResults]);


  // const roles = [
  //   {
  //     id: 'r1',
  //     candidateIds: ['c1', 'c2'],
  //     qualificationIds: ['q1'],
  //   },
  //   {
  //     id: 'r2',
  //     candidateIds: ['c4'],
  //     qualificationIds: ['q2'],
  //   },
  //   {
  //     id: 'r3',
  //     candidateIds: [],
  //     qualificationIds: ['q1'],
  //   },
  //   {
  //     id: 'r4',
  //     candidateIds: ['c1', 'c3'],
  //     qualificationIds: [],
  //   },
  // ];

  // const candidates = [
  //   {
  //     id: 'c1',
  //     roleIds: ['r1'],
  //     qualificationIds: ['q1', 'q2'],
  //   },
  //   {
  //     id: 'c2',
  //     roleIds: ['r1'],
  //     qualificationIds: ['q1'],
  //   },
  //   {
  //     id: 'c3',
  //     roleIds: ['r4'],
  //     qualificationIds: [],
  //   },
  //   {
  //     id: 'c4',
  //     roleIds: ['r2'],
  //     qualificationIds: ['q2'],
  //   },
  // ];

  // const qualifications = [
  //   {
  //     id: 'q1',
  //     candidateIds: ['c1', 'c2'],
  //     roleIds: ['r1', 'r3'],
  //   },
  //   {
  //     id: 'q2',
  //     candidateIds: ['c1', 'c4'],
  //     roleIds: ['r2'],
  //   },
  // ];

  const n = roles.length + candidates.length + qualifications.length;

  // Create an nxn matrix of 0s
  const matrix = Array(n).fill(0).map(() => Array(n).fill(0));

  // Populate the matrix with the relationships
  roles.forEach((role, i) => {
    candidates.forEach((candidate, j) => {
      if (role.candidateIds.includes(candidate.id)) {
        matrix[i][j + roles.length] = 1;
      }
    });
    qualifications.forEach((qualification, j) => {
      if (role.qualificationIds.includes(qualification.id)) {
        matrix[i][j + roles.length + candidates.length ] = 1;
      }
    });
  });

  candidates.forEach((candidate, i) => {
    roles.forEach((role, j) => {
      if (candidate.roleIds.includes(role.id)) {
        matrix[i + roles.length ][j] = 1;
      }
    });
    qualifications.forEach((qualification, j) => {
      if (candidate.qualificationIds.includes(qualification.id)) {
        matrix[i + roles.length ][j + roles.length + candidates.length ] = 1;
      }
    });
  });

  qualifications.forEach((qualification, i) => {
    roles.forEach((role, j) => {
      if (qualification.roleIds.includes(role.id)) {
        matrix[i + roles.length + candidates.length ][j] = 1;
      }
    });
    candidates.forEach((candidate, j) => {
      if (qualification.candidateIds.includes(candidate.id)) {
        matrix[i + roles.length + candidates.length ][j + roles.length ] = 1;
      }
    });
  });
  

  console.log(queryResults);
  const colors = new Array(roles.length).fill('blue').concat(new Array(candidates.length).fill('red'), new Array(qualifications.length).fill('green'));

  const width = 1000;
  let height = 1000;
  const centerSize = 20;
  height -= 77;
  const outerRadius = Math.min(width, height) * 0.5 - (centerSize + 10);
  const innerRadius = outerRadius - centerSize;

  console.log('matrix', matrix);

  return (
    <>
      <h1>Graph</h1>
     <svg width={width} height={height}>
        <Group top={height / 2} left={width / 2}>
          <Chord matrix={matrix} padAngle={0.05}>
            {({ chords }) => (
              <g>
                {chords.groups.map((group, i) => (
                  <Arc
                    key={`key-${i}`}
                    data={group}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    fill={colors[i]}
                    onClick={() => {
                      if (events) alert(`${JSON.stringify(group)}`);
                    }}
                  />
                ))}
                {chords.map((chord, i) => {
                  return (
                    <Ribbon
                      key={`ribbon-${i}`}
                      chord={chord}
                      radius={innerRadius}
                      fill={colors[chord.target.index]}
                      fillOpacity={0.75}
                      onClick={() => {
                        if (events) alert(`${JSON.stringify(chord)}`);
                      }}
                    />
                  );
                })}
              </g>
            )}
          </Chord>
        </Group>
      </svg>
    </>
  );
}