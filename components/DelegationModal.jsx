import { Modal } from 'bootstrap';

export default function DelegationModal({
  opened,
  onClose,
  id,
}) {
  return (
    <Modal
      opened={delegationModalOpen}
      onClose={() => { setDelegationModalOpen(false) }}
    >

      </Modal>
  );
}