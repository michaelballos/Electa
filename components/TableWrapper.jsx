import TableComponent from './TableComponent'
import AddQualification from './AddQualification'
import Tabs from './Tabs'
import { useMemo, useState } from 'react'
import { Button, Group } from '@mantine/core'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

function TableWrapper() {
  const [activeTab, setActiveTab] = useState(0)
  const buttonTexts = ['Create Role', 'Add Candidate', 'Define Qualifications']

  // This will have multiple calls to mutation.mutate()
  const buttonCallbacks = [() => {}, () => {}, () => {}]

  const currentButtonText = useMemo(() => buttonTexts[activeTab], [activeTab])
  const currentButtonCallback = useMemo(
    () => buttonCallbacks[activeTab],
    [activeTab]
  )

  return (
    <div className='tablePageContainer'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Group
        position="right"
      >
        <Button color='green' size='sm' onClick={currentButtonCallback}>
          {currentButtonText}
        </Button>
      </Group>
    </div>
  )
}

export default TableWrapper;
