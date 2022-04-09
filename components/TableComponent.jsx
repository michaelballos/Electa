import { Table } from '@mantine/core'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

function TableComponent({ routeType }) {
  const { data, status } = useQuery({
    queryKey: `table-${routeType}`,
    queryFn: () =>
      fetch(`/api/${routeType}`, { method: 'GET', headers: {} }).then((res) =>
        res.json()
      ),
  })

  const content = useMemo(() => {
    if (status === 'success') {
      if (data.length === 0) {
        return <p>No data</p>
      }
      const columns = Object.keys(data[0])
      const rows = data.map((element, index) => (
        <tr key={element.id}>
          {columns.map((column) => (
            <td key={`${element.id}-${column}`}>{element[column]}</td>
          ))}
        </tr>
      ))

      const tableHeaders = columns.map((column) => (
        <th key={column}>{column}</th>
      ))

      return (
        <Table>
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )
    }
    return 'Loading...'
  }, [data, status])

  return content
}

export default TableComponent
