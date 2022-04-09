import { useState } from 'react'
import { SegmentedControl, Stack, Title } from '@mantine/core'
import styles from '../styles/tabs.module.css'
import { Tabs as MantineTabs } from '@mantine/core'
import TableComponent from './TableComponent'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <MantineTabs active={activeTab} onTabChange={setActiveTab}>
      <MantineTabs.Tab label='Roles'>
        <Stack direction='vertical' spacing='tight'>
          <Title>Roles</Title>
          <TableComponent routeType='roles' />
        </Stack>
      </MantineTabs.Tab>
      <MantineTabs.Tab label='Candidates'>
        <Stack direction='vertical' spacing='tight'>
          <Title>Candidates</Title>
          <TableComponent routeType='roles' />
        </Stack>
      </MantineTabs.Tab>
      <MantineTabs.Tab label='Qualifications'>
        <Stack direction='vertical' spacing='tight'>
          <Title>Qualifications</Title>
          <TableComponent routeType='qualifications' />
        </Stack>
      </MantineTabs.Tab>
    </MantineTabs>
  )
}

export default Tabs
