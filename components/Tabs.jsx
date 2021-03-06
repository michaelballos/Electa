import { useState } from 'react'
import { Container, SegmentedControl, Stack, Title } from '@mantine/core'
import styles from '../styles/tabs.module.css'
import { Tabs as MantineTabs } from '@mantine/core'
import TableComponent from './TableComponent'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <MantineTabs active={activeTab} onTabChange={setActiveTab}>
      <MantineTabs.Tab label='Roles'>
        <Container size="xl">
          <TableComponent routeType='roles' />
        </Container>
      </MantineTabs.Tab>
      <MantineTabs.Tab label='Candidates'>
        <Container size="xl">
          <TableComponent routeType='candidates' />
        </Container>
      </MantineTabs.Tab>
      <MantineTabs.Tab label='Qualifications'>
        <Container size="xl">
          <TableComponent routeType='qualifications' />
        </Container>
      </MantineTabs.Tab>
    </MantineTabs>
  )
}

export default Tabs