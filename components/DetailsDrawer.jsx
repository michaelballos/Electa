import { Container, MultiSelect, Loader, Button, Center, Drawer, Group, Title, Stack, Box, Text, Modal } from '@mantine/core';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Trash, Wand } from 'tabler-icons-react';
import DelegationModal from './DelegationModal';
import DetailsEditForm from './DetailsEditForm';
import QualificationsSelect from './QualificationsSelect';

// function that takes a string and capitalizes the first letter
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

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
      title={
        <Title order={2}>Details for {capitalize(type)}</Title>
      }
    >
      {status === 'success' ? (
        <Stack align="stretch" spacing="md">
          <DetailsEditForm
            data={data}
            type={type}
          />
          <Stack spacing="xs">
            <Title order={4}>Actions</Title>

            <QualificationsSelect
              type={type}
              associationId={id}
            />

            {type === 'candidate' && (
              <Stack>
                <Text size="sm">
                  Find the potential roles for this candidate?
                </Text>
                <Button
                  color="blue"
                  leftIcon={<Wand size={16} />}
                  onClick={() => {setDelegationModalOpen(true)}}
                >
                  Review Potential Delegations
                </Button>
              </Stack>
            )}

            <Stack>
              <Text size="sm">
                Delete this resource?
              </Text>
              <Button
                color="red"
                leftIcon={<Trash size={16} />}
                onClick={() => { }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Center>
          <Loader />
        </Center>
      )}
      <DelegationModal
        opened={delegationModalOpen}
        onClose={() => { setDelegationModalOpen(false) }}
        id={id}
      />
    </Drawer>
  );
}
//{data?.name || 'Details'