import { useStoreModal } from '@/hooks/use-store-modal';

import Modal from './Modal';
import FormStore from '../FormStore';

const StoreModal = () => {
	const { isOpen, onClose } = useStoreModal();

	return (
		<Modal
			title='Create Store'
			description='Add new store to manage products and categories'
			isOpen={isOpen}
			onClose={onClose}
		>
			<FormStore />
		</Modal>
	);
};
export default StoreModal;
