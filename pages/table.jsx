import TableComponent from '../components/TableComponent'
import AddQualification from '../components/Tabs'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

function TablePage() {
  return (
    <div className='tablePageContainer'>
      <TableComponent />
      <AddQualification />
    </div>
  )
}

export default TablePage
