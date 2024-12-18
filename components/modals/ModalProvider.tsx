'use client';
import { useEffect, useState } from 'react';

import StoreModal from './StoreModal';

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return <StoreModal />;
};
export default ModalProvider;
