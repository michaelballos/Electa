import { useState } from 'react'
import { SegmentedControl, Table } from '@mantine/core'
import { useQuery } from 'react-query'

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
      candidates: data.candidates,
      description: data.description,
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
      <Table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Description</th>
            <th>updatedAt</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  )
}

export default Tabs
