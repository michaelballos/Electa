import { Container, MultiSelect, Loader, Button, Center, Drawer, Group, Title, Stack, Box, Text } from '@mantine/core';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Trash } from 'tabler-icons-react';
import DetailsEditForm from './DetailsEditForm';
import QualificationsSelect from './QualificationsSelect';

export default function DetailsDrawer({
  type,
  id,
  setFocusedId,
  opened,
  setOpened,
}) {
  console.log('DetailsDrawer', type, id);
  const { data, status } = useQuery({
    queryKey: `details-${type}-${id}`,
    queryFn: async () => {
      return await fetch(`/api/${type}/${id}`, { method: 'GET', headers: {} }).then((res) => res.json())
    },
    enabled: id !== null,
  })
  console.log('DetailsDrawer', data, status);
  const name = data?.name || '';
  const handleClose = useCallback(() => {
    setFocusedId(null);
    setOpened(false);
  }, [setFocusedId, setOpened]);

  return (
    <Drawer
      opened={opened}
      position="right"
      size="xl"
      padding="md"
      onClose={handleClose}
    >
      {status === 'success' ? (
        <Stack align="stretch" spacing="md">
          <DetailsEditForm
            data={data}
            type={type}
          />
          <Stack spacing="xs">
            <Title order={5}>Actions</Title>

            <QualificationsSelect
              type={type}
              associationId={id}
            />

            <Text size="sm">
              Delete this resource?
            </Text>
            <Button
              color="red"
              icon={<Trash size={16} />}
              onClick={() => { }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Center>
          <Loader />
        </Center>
      )}
    </Drawer>
  );
}
//{data?.name || 'Details'