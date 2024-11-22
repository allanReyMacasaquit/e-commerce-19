import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

function Homepage() {
	return (
		<div className='bg-brand-dark'>
			<UserButton afterSwitchSessionUrl='/' />
		</div>
	);
}
export default Homepage;
