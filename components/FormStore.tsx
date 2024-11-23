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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import axios from 'axios';
import toast from 'react-hot-toast';
import { NextResponse } from 'next/server';
import { Loader } from 'lucide-react';

const FormStore = () => {
	const { isOpen, onClose } = useStoreModal();
	const [isLoading, setIsLoading] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true);
			const response = await axios.post('/api/stores/', values);
			toast.success('Store created successfully!');
			form.reset();
		} catch (error) {
			toast.error('Failed to create the store. Please try again.');
		} finally {
			setIsLoading(false);
		}
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
										disabled={isLoading}
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
						<Button disabled={isLoading} variant='outline' onClick={onClose}>
							Cancel
						</Button>
						<Button disabled={isLoading} type='submit'>
							{isLoading ? <Loader /> : 'Submit'}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default FormStore;
