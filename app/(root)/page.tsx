'use client';
import { useEffect } from 'react';

import Modal from '@/components/modals/Modal';
import { useStoreModal } from '@/hooks/use-store-modal';

function Homepage() {
	const { isOpen, onOpen } = useStoreModal();

	useEffect(() => {
		if (!isOpen) {
			onOpen();
		}
	}, [isOpen, onOpen]);

	return <div className='bg-brand-dark p-brand'>Root Page</div>;
}
export default Homepage;
