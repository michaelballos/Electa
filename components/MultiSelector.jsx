import { MultiSelect } from '@mantine/core'

const MultiSelector = () => {
  const data = [
    {
      id: 1,
      name: 'Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
    },
  ]

  return (
    <MultiSelect
      style={{
        paddingBottom: '1rem',
      }}
      data={data}
      label='Add Delegate'
      placeholder='Scroll to see all options'
      maxDropdownHeight={160}
    />
  )
}

export default MultiSelector
