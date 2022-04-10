import {
  Chord, Ribbon
} from '@visx/chord';
import { Group } from '@visx/group';
import withParentSize from '@visx/responsive/lib/enhancers/withParentSizeModern';
import { Arc } from "@visx/shape";
import { useEffect, useMemo, useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { scaleOrdinal } from "@visx/scale";
import { LinearGradient } from "@visx/gradient";
import { DEFAULT_THEME } from '@mantine/core';

const pink = "#ff2fab";
const orange = "#ffc62e";
const purple = "#dc04ff";
const purple2 = "#7324ff";
const red = "#d04376";
const green = "#52f091";
const blue = "#04a6ff";
const lime = "#00ddc6";

export const background = '#3b6978';
export const background2 = '#204051';

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

  const color = scaleOrdinal({
    domain: [0, 1, 2, 3],
    range: [
      "url(#gpinkorange)",
      "url(#gpurplered)",
      "url(#gpurplegreen)",
      "url(#gbluelime)"
    ]
  });

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


  const colors = new Array(roles.length).fill(color(2)).concat(
    new Array(candidates.length).fill(color(0)),
    new Array(qualifications.length).fill(color(3))
  );

  const width = parentWidth || 500;
  const height = parentWidth || 500;

  const centerSize = 20;
  const outerRadius = width/2 - (centerSize);
  const innerRadius = outerRadius - centerSize;

  return (
    <svg width={width} height={height}>
      <LinearGradient
        id="gpinkorange"
        from={pink}
        to={orange}
        vertical={false}
      />
      <LinearGradient
        id="gpurplered"
        from={purple}
        to={red}
        vertical={false}
      />
      <LinearGradient
        id="gpurplegreen"
        from={purple2}
        to={green}
        vertical={false}
      />
      <LinearGradient id="gbluelime" from={blue} to={lime} vertical={false} />
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="url(#area-background-gradient)"
        rx={14}
      />
      <LinearGradient id="area-background-gradient" from={background} to={background2} />
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