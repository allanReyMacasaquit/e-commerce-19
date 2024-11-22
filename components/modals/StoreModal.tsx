import { useStoreModal } from '@/hooks/use-store-modal';

import Modal from './Modal';

const StoreModal = () => {
	const storeModal = useStoreModal();
	return (
		<Modal
			title='Create Store'
			description='Add new store to manage products and categories'
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			Create store form
		</Modal>
	);
};
export default StoreModal;
