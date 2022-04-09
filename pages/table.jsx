import TableComponent from '../components/TableComponent'
import AddQualification from '../components/AddQualification'
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
