import { useState } from 'react'
import { useQuery } from 'react-query'
import TableComponent from '../components/TableComponent'
import { SegmentedControl } from '@mantine/core'
/**
 * name
 * desc
 * updatedAt
 * createdAt
 */

function Tabs() {
  const [value, setValue] = useState('react')

  const { data, status } = useQuery(
    'candidates',
    fetch('/api/candidates').then((res) => res.json())
  )

  const elements = [
    {
      candidates: 'Candidates',
      description: 'Description',
      updatedAt: 'updatedAt',
      createdAt: 'Carbon',
    },
  ]

  const rows = elements.map((element) => (
    <tr key={element.candidates}>
      <td>{element.description}</td>
      <td>{element.updatedAt}</td>
      <td>{element.createdAt}</td>
    </tr>
  ))

  return (
    <>
      <SegmentedControl
        value={value}
        onChange={setValue}
        data={[
          { label: 'Roles', value: 'react' },
          { label: 'Qualifications', value: 'ng' },
          { label: 'Candidates', value: 'vue' },
        ]}
      />
      <TableComponent />
    </>
  )
}

export default Tabs
