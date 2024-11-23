'use client';

import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
	return (
		<Toaster
			position='top-right' // Customize position: "top-right", "bottom-right", etc.
			reverseOrder={false}
			toastOptions={{
				style: {
					background: '#fff',
					color: '#000',
				},
				success: {
					style: {
						background: '#4caf50',
						color: '#fff',
					},
				},
				error: {
					style: {
						background: '#f44336',
						color: '#fff',
					},
				},
			}}
		/>
	);
};
