import { useState } from 'react'
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core'

const AddQualification = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className='tabsContainer'>
      <Group position='center'>
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size='lg'
        radius='md'
      >
        <Text size='sm' style={{ marginBottom: 10 }} weight={500}>
          Add Qualification
        </Text>

        <Group align='center'>
          <TextInput placeholder='Qualification' style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Add</Button>
        </Group>
      </Dialog>
    </div>
  )
}

export default AddQualification
