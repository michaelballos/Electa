import TableComponent from '../components/TableComponent'
import AddQualification from '../components/AddQualification'
import Tabs from '../components/Tabs'
import { useMemo, useState } from 'react'
import { Button } from '@mantine/core'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

function TablePage() {
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

export default TablePage
