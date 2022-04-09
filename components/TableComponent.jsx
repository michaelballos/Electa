import { Table } from '@mantine/core'
import { useQuery } from 'react-query'

function TableComponent() {
  const { data, status } = useQuery(
    'candidates',
    fetch('/api/candidates').then((res) => res.json())
  )

  const elements = [
    {
      name: 6,
      description: 12.011,
      qualifications: 'C',
      updatedAt: 'Carbon',
      createdAt: 'Nitrogen',
    },
    {
      name: 7,
      description: 14.007,
      qualifications: 'N',
      updatedAt: 'Nitrogen',
      createdAt: 'Nitrogen',
    },
    {
      name: 39,
      description: 88.906,
      qualifications: 'Y',
      updatedAt: 'Yttrium',
      createdAt: 'Nitrogen',
    },
    {
      name: 56,
      description: 137.33,
      qualifications: 'Ba',
      updatedAt: 'Barium',
      createdAt: 'Nitrogen',
    },
    {
      name: 58,
      description: 140.12,
      qualifications: 'Ce',
      updatedAt: 'Cerium',
      createdAt: 'Nitrogen',
    },
  ]

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.description}</td>
      <td>{element.qualifications}</td>
      <td>{element.updatedAt}</td>
      <td>{element.createdAt}</td>
    </tr>
  ))

  return (
    <Table className='tableContainer'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Qualifications</th>
          <th>updatedAt</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default TableComponent
