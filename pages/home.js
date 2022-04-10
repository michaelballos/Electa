import {
  AppShell,
  Box,
  Divider,
  Header,
  Title,
  Navbar,
  Stack,
  Text as MantineText,
  Multiselect,
  Grid,
  Space,
} from '@mantine/core'
import { Card, Group } from '@mantine/core'
import withParentSize from '@visx/responsive/lib/enhancers/withParentSizeModern'
import Chart from '../components/Chart'
import Graph from '../components/Graph'
import { MainLinks } from '../components/MainLinks'
import TableWrapper from '../components/TableWrapper'
import { User } from '../components/User'

/*
    <Box
      sx={
        (theme) => ({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          backgroundColor: theme.colors.blue[1],
        })
      }
    >
      <Stack>
        <Stack>
          <Title order={1}>Electa API</Title>
          <Title order={2}>Automate Delegation</Title>
          <Divider />
        </Stack>
        <Container size="lg">
          <TableWrapper />
        </Container>
      </Stack>
      <Stack>
        <Stack>
          <Title order={3}>System Graph</Title>
          <Graph />
        </Stack>
      </Stack>
    </Box>
*/

export default function HomePage() {
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
          <TableWrapper />
        </Card>
      </Grid.Col>
      <Grid.Col md={5} lg={4} xl={3} sm={12}>

        <Stack>
          <Card shadow='sm'>
            <Title order={3}>System Map</Title>
            <Graph />
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

const ChartWrapper = withParentSize(
  ({
    parentWidth,
  }) => {
    return (
      <div style={{ marginTop: '10px' }}>
        <Chart
          width={parentWidth}
          height={parentWidth}
        />
      </div>
    );
  }
)