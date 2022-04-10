import { Code, Modal, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

export default function DelegationModal({
  opened,
  onClose,
  id,
}) {
  const [enabled, setEnabled] = useState(false);

  const mutation = useMutation(async (inspectID) => {
    return await fetch(
      '/api/possibleDelegations',
      {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          id: inspectID,
        }),
      }).then((res) => res.json());
  });


  useEffect(() => {
    if (opened && id && mutation.status === 'idle') {
      mutation.mutate(id);
    }
  }, [id, mutation, opened]);

  const handleClose = useCallback(() => {
    mutation.reset();
    onClose();
  }, [mutation, onClose]);

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        <Title order={2}>Possible Delegations</Title>
      }
    >
      {mutation.status === 'success' ? (
        <pre>
          <Code block>
            {JSON.stringify(mutation.data, null, 4)}
          </Code>
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </Modal>
  );
}