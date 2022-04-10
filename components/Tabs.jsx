import { useState } from 'react'
import { Container, SegmentedControl, Stack, Title } from '@mantine/core'
import { Tabs as MantineTabs } from '@mantine/core'
import TableComponent from './TableComponent'

/**
 * creates the tabs for te dashboard
 * @param {*} activeTab - the active tab
 * @param {*} setActiveTab - the function to set the active tab
 * @returns {React.ReactElement} - the tabs
 */
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabObjects = [
    {
      label: 'Roles',
      size: 'xl',
    },
    {
      label: 'Candidates',
      size: 'xl',
    },
    {
      label: 'Qualifications',
      size: 'xl',
    },
  ]

  /**
   * creates the tabs and defines size
   * @param {*} tabObject - the tab object
   * @returns {React.ReactElement} - the tabs
   */
const tabs = tabObjects.map((tab) => {
  const label = tab.label
  const size = tab.size
  const route = `/${label.toLowerCase()}`

  return ( 
      <>
        <MantineTabs 
          active={activeTab}
          onTabChange={setActiveTab}>
        <MantineTabs.Tab label={label}>
            <Container size={size}>
        <TableComponent 
          routeType={route}
           />
        </Container>
      </>
      )
})

export default Tabs
