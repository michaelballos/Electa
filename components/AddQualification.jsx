import { useState } from 'react'
import { Popover, Text, TextInput, Button, Image } from '@mantine/core'
import styles from '../styles/addQual.module.css'
const AddQualification = () => {
  const [opened, setOpened] = useState(false)
  return (
    <Popover
      className={styles.addQualContainer}
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <Button onClick={() => setOpened((o) => !o)}>Add Qualification</Button>
      }
      width={260}
      position='bottom'
      withArrow
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <TextInput
          style={{
            width: '100%',
          }}
          placeholder='Add Qualification'
          required
        />
      </div>
    </Popover>
  )
}

export default AddQualification
