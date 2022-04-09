import {
  Chord, Ribbon
} from '@visx/chord';
import { Group } from '@visx/group';
import withParentSize from '@visx/responsive/lib/enhancers/withParentSizeModern';
import { Arc } from "@visx/shape";
import { useEffect, useMemo, useState } from 'react';
import { useQueries, useQuery } from 'react-query';

function Graph({
  parentWidth,
  parentHeight,
}) {
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

  console.log('parentWidth', parentWidth);
  console.log('parentHeight', parentHeight);
  const width = parentWidth || 500;
  const height = parentWidth || 500;

  const centerSize = 20;
  const outerRadius = width/2;// - (centerSize + 10);
  const innerRadius = outerRadius - centerSize;

  console.log('matrix', matrix);

  return (
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
  );
}

export default withParentSize(Graph);