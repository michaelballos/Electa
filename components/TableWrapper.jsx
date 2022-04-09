import TableComponent from './TableComponent'
import AddQualification from './AddQualification'
import Tabs from './Tabs'
import { useMemo, useState } from 'react'
import { Button } from '@mantine/core'
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
      <Button color='green' size='lg' onClick={currentButtonCallback}>
        {currentButtonText}
      </Button>
    </div>
  )
}

export default TableWrapper;
