declare interface ModalProps {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

declare interface useStoreModalState {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}
