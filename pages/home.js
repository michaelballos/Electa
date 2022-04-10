import {
  Title,
  Stack,
  Text as MantineText,
  Grid,
  Card,
  Group,
  Autocomplete,
} from '@mantine/core'
import TableWrapper from '../components/TableWrapper'
import Graph from '../components/Graph'
import { MainLinks } from '../components/MainLinks'
import { useState } from 'react'
import AddQualification from '../components/AddQualification'

export default function HomePage() {
  const [opened, setOpened] = useState(false)

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
          <TableWrapper onClick={() => setOpened()} />
        </Card>
      </Grid.Col>
      <Grid.Col md={5} lg={4} xl={3} sm={12}>
        <Stack>
          <Card shadow='sm'>
            <Title order={3}>System Map</Title>
            <AddQualification />
          </Card>
          <Card shadow='sm'>
            <Title order={3}>Current Usage</Title>
          </Card>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}
// <Graph />
