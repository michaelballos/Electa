import { Container, MultiSelect, Loader, Button, Center, Drawer, Group, Title, Stack, Box, Text, Modal } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Trash, Wand } from 'tabler-icons-react';
import DetailsEditForm from './DetailsEditForm';
import QualificationsSelect from './QualificationsSelect';

export default function DetailsDrawer({
  type,
  id,
  setFocusedId,
  opened,
  setOpened,
}) {

  const [delegationModalOpen, setDelegationModalOpen] = useState(false);

  const { data, status } = useQuery({
    queryKey: `details-${type}-${id}`,
    queryFn: async () => {
      return await fetch(`/api/${type}/${id}`, { method: 'GET', headers: {} }).then((res) => res.json())
    },
    enabled: id !== null,
  })

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

            {type === 'candidates' && (
              <>
                <Text size="sm">
                  Find the potential roles for this candidate?
                </Text>
                <Button
                  color="red"
                  icon={<Wand size={16} />}
                  onClick={() => {setDelegationModalOpen(true)}}
                >
                  Review Potential Delegations
                </Button>
              </>
            )}

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