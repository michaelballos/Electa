import { Table } from '@mantine/core'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import DetailsDrawer from './DetailsDrawer'

// function that removes the last character from a string
const removeLastChar = (str) => str.slice(0, -1)

function TableComponent({ routeType }) {
  const [focusedId, setFocusedId] = useState(null)
  const [opened, setOpened] = useState(false)

  const { data, status } = useQuery({
    queryKey: `table-${routeType}`,
    queryFn: () =>
      {
        return fetch(`/api/${routeType}`, { method: 'GET', headers: {} }).then((res) => res.json()
        )
      },
  })

  console.log(data);

  return (
    <>
      {status === 'success' ? (
        <>
          {data.length === 0 ? (
            <p>No resources found</p>
          ) : (
            <Table>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((element, index) => (
                  <tr
                    key={element.id}
                    onClick={() => {
                      setOpened(true);
                      setFocusedId(element.id);
                    }}
                  >
                    {Object.keys(data[0]).map((column) => (
                      <td key={`${element.id}-${column}`}>{element[column]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      <DetailsDrawer
        type={removeLastChar(routeType)}
        id={focusedId}
        setFocusedId={setFocusedId}
        opened={opened}
        setOpened={setOpened}
      />
    </>
  );
}

export default TableComponent
