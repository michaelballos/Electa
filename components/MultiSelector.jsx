import { MultiSelect } from '@mantine/core'

const MultiSelector = () => {
  const data = Array(50)
    .fill(0)
    .map((_, index) => `Item ${index}`)

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
