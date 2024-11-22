'use client';

import Modal from '@/components/modals/Modal';
import { UserButton } from '@clerk/nextjs';

function Homepage() {
	return (
		<div className='bg-brand-dark'>
			<Modal
				isOpen
				onClose={() => {}}
				title='test'
				description='test description'
			>
				children
			</Modal>
			hello
		</div>
	);
}
export default Homepage;
