import { Button, Group, Loader, MultiSelect, Stack } from '@mantine/core'
import { useCallback, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export default function QualificationsSelect({
  type,
  associationId,
}) {
  const { data: allQualificationData, status } = useQuery({
    queryKey: 'qualificationsSelect',
    queryFn: async () => {
      return await fetch('/api/qualifications', {
        method: 'GET', headers: {}
      }).then((res) => res.json())

    },
    select: (data) => {
      return data.map(qualification => ({
        value: qualification.id,
        label: qualification.name,
        isActive: qualification[type === 'role' ? 'roleIds' : 'candidateIds'].some(requirementId => requirementId === associationId),
      }))
    },
    enabled: true,
  })

  const client = useQueryClient()

  const mutation = useMutation(
    async (body) => {
      await fetch(`/api/${type === 'role' ? 'requirement' : 'endorsement'}`, {
        method: 'POST',
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

  const [value, setValue] = useState([])

  const handleUpdate = useCallback(() => {
    value.forEach((value) => {
      if (type === 'role') {
        mutation.mutate({
          roleId: associationId,
          qualificationId: value,
        })
      }
    })
  }, [value, associationId, type, mutation])

  return (
    <>
      {status === 'success' ? (
          <MultiSelect
            data={allQualificationData}
            value={value}
            onChange={(value) => {
              setValue(value)
            }}
            label={type === 'role' ? 'Select Requirements' : 'Select Endorsements'}
          />
      ) : (
        <Loader />
      )}
      <Stack spacing="xs">
        <Group position="right">
          <Button
            color="green"
            size="sm"
            onClick={handleUpdate}
          >
            Update {type === 'role' ? 'Requirements' : 'Endorsements'}
          </Button>
        </Group>
      </Stack>
    </>
  );
}
