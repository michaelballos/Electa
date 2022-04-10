import { Button, Group, Modal, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMutation, useQueryClient } from 'react-query'

export default function NewResourceModal({ isOpen, onClose, type, title }) {
  const client = useQueryClient()
  const mutation = useMutation(
    async (body) => {
      await fetch(`/api/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    },
    {
      onSuccess: () => {
        client.refetchQueries()
        onClose()
      },
    }
  )

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },
    validate: {
      name: (value) => (/[a-zA-Z0-9 ]+/.test(value) ? null : 'Invalid name'),
      description: (value) =>
        /[a-zA-Z0-9 ]+/.test(value) ? null : 'Invalid description',
    },
  })

  return (
    <Modal opened={isOpen} onClose={onClose} title={title}>
      <form
        onSubmit={form.onSubmit((values) => {
          mutation.mutate(values)
          onClose()
        })}
      >
        <TextInput
          label='Name'
          id='name'
          {...form.getInputProps('name')}
          required
        />
        <Textarea
          mt='sm'
          placeholder='Description'
          label='Description'
          required
          {...form.getInputProps('description')}
        />
        <Group align='space-between' mt='md'>
          <Button size='sm' color='gray' onClick={onClose}>
            Cancel
          </Button>
          <Button size='sm' color='green' type='submit'>
            {title}
          </Button>
        </Group>
      </form>
    </Modal>
  )
}
