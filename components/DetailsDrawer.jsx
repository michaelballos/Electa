import { Container, Loader, Button, Center, Drawer, Group, Title, Stack, Box, Text } from '@mantine/core';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Trash } from 'tabler-icons-react';
import DetailsEditForm from './DetailsEditForm';

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
      title={<Title order={3}>{data?.name || 'Details'}</Title>}
    >
      {status === 'success' ? (
        <Stack align="stretch" spacing="md">
          <DetailsEditForm
            data={data}
            type={type}
          />
          <Stack spacing="xs">
            <Title order={5}>Actions</Title>

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