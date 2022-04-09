import { Table } from '@mantine/core'
import { useQuery } from 'react-query'

const TableComponent = () => {
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
      <td> {element.description} </td> <td> {element.updatedAt} </td>{' '}
      <td> {element.createdAt} </td>{' '}
    </tr>
  ))

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th> Names </th>
            <th> Description </th>
            <th> updatedAt </th> <th> createdAt </th>{' '}
          </tr>{' '}
          <tbody> {rows} </tbody>{' '}
        </thead>{' '}
      </Table>{' '}
      <button
        style={{
          float: 'right',
          padding: '5px 10px',
          margin: '15px 0',
          borderRadius: '5px',
        }}
      >
        add{' '}
      </button>{' '}
      <button
        style={{
          float: 'right',
          padding: '5px 10px',
          margin: '15px 25px',
          borderRadius: '5px',
        }}
      >
        delete{' '}
      </button>{' '}
    </>
  )
}

export default TableComponent
