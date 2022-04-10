import Tabs from './Tabs'
import { useCallback, useMemo, useState } from 'react'
import { Button, Group } from '@mantine/core'
import NewResourceModal from './NewResourceModal'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

const tabTypes = ['role', 'candidate', 'qualification']
const buttonTexts = ['Create Role', 'Add Candidate', 'Define Qualifications']

function TableWrapper() {
    const [activeTab, setActiveTab] = useState(0)

    const [open, setOpen] = useState(false)

    // This will have multiple calls to mutation.mutate()

    const currentButtonText = useMemo(() => buttonTexts[activeTab], [activeTab])

    const currentTabType = useMemo(() => tabTypes[activeTab], [activeTab])

    const handleModalClose = useCallback(() => {
        setOpen(false)
    }, [])

    const openModal = useCallback(() => {
        setOpen(true)
    }, [])

    return ( <
        div className = 'tablePageContainer' >
        <
        Tabs activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />{' '} <
        Group mt = { 3 }
        position = 'right' >
        <
        Button color = 'green'
        size = 'sm'
        onClick = { openModal } > { ' ' } { currentButtonText } { ' ' } <
        /Button>{' '} <
        /Group>{' '} <
        NewResourceModal isOpen = { open }
        onClose = { handleModalClose }
        type = { currentTabType }
        title = { currentButtonText }
        />{' '} <
        /div>
    )
}

export default TableWrapper