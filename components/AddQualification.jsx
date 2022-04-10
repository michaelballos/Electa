import { useState } from 'react'
import { Autocomplete, Input, Button, Card, MultiSelect } from '@mantine/core'
import styles from '../styles/addQual.module.css'
import MultiSelector from './MultiSelector'

const AddQualification = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Card>
      <MultiSelector />
      <Input
        sizw='xl'
        placeholder='Description'
        style={{
          height: '7rem',
        }}
      />
    </Card>
  )
}

export default AddQualification
