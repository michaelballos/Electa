import { Button, Group, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useMutation, useQueryClient } from 'react-query';

export default function DetailsEditForm({
  data,
  type,
}) {
  
  const client = useQueryClient();
  const mutation = useMutation(
    async (body) => {
      await fetch(`/api/${type}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    },
    {
      onSuccess: () => {
        client.refetchQueries();
      },
    }
  );

  const form = useForm({
    initialValues: {
      name: data.name || '',
      description: data.description || '',
    },
    validate: {
      name: (value) => (/[a-zA-Z0-9 ]+/.test(value) ? null : 'Invalid name'),
      description: (value) =>
        /[a-zA-Z0-9 ]+/.test(value) ? null : 'Invalid description',
    },
  })
  console.log('DetailsEditForm', form);

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutation.mutate(values)
      })}
    >
      <Title order={4}>Attributes</Title>
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
      <Group position="right" align='flex-end' mt='md'>
        <Button size='sm' color='green' type='submit'>
          Apply Changes
        </Button>
      </Group>
    </form>
  );
}