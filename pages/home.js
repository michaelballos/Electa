import { Title, Stack, Text as MantineText, Grid } from '@mantine/core'
import { Card } from '@mantine/core'
import withParentSize from '@visx/responsive/lib/enhancers/withParentSizeModern'
import Chart from '../components/Chart'
import Graph from '../components/Graph'
import TableWrapper from '../components/TableWrapper'
import { useState } from 'react'
import { useCallback } from 'react'

export default function HomePage() {
  const [opened, setOpened] = useState(false)
  const openSesame = useCallback(() => setOpened(), [])

  return (
    <Grid>
      <Grid.Col md={7} lg={8} xl={9} sm={12}>
        <Card
          shadow='sm'
          sx={{
            height: '100%',
          }}
        >
          <Title order={3}>Inspector</Title>
          <TableWrapper onClick={openSesame} />
        </Card>
      </Grid.Col>
      <Grid.Col md={5} lg={4} xl={3} sm={12}>
        <Stack>
          <Card shadow='sm'>
            <Graph />
            <Title order={3}>System Map</Title>
          </Card>
          <Card shadow='sm'>
            <Title order={3}>Current Usage</Title>
            <ChartWrapper />
          </Card>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

const ChartWrapper = withParentSize(({ parentWidth }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Chart width={parentWidth} height={parentWidth} />
    </div>
  )
})
