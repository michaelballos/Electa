import TableComponent from '../components/TableComponent'
import AddQualification from '../components/AddQualification'
import Tabs from '../components/Tabs'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

function TablePage() {
  return (
    <div className='tablePageContainer'>
      <Tabs />
      <TableComponent />
      <AddQualification />
    </div>
  )
}

export default TablePage
