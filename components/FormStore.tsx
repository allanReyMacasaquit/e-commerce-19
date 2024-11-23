import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { useStoreModal } from '@/hooks/use-store-modal';
import { formSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormStore = () => {
	const { isOpen, onClose } = useStoreModal();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div className='form-container'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										className='form-input'
										placeholder='Content Management System'
										{...field}
									/>
								</FormControl>
								<FormDescription>Create new store</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='btn-group'>
						<Button variant='outline' onClick={onClose}>
							Cancel
						</Button>
						<Button type='submit'>Submit</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default FormStore;
