import { Box, Divider, Title } from '@mantine/core'
import { Group } from '@visx/group'
import { Container, Stack } from 'react-bootstrap'
import Graph from '../components/Graph'
import TableWrapper from '../components/TableWrapper'

export default function HomePage() {
    return ( <
        Box sx = {
            {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
            }
        } >
        <
        Stack >
        <
        Stack >
        <
        Title order = { 1 } > Electa API < /Title> <
        Title order = { 2 } > Automate Delegation < /Title> <
        Divider / >
        <
        /Stack> <
        Container size = 'lg' >
        <
        TableWrapper / >
        <
        /Container> <
        /Stack> <
        Stack >
        <
        Stack >
        <
        Title order = { 3 } > System Graph < /Title> <
        Graph / >
        <
        /Stack> <
        /Stack> <
        /Box>
    )
}