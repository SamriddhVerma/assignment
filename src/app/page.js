import Link from 'next/link';
import ShowSchools from './showSchools';

export default function Page() {
	return (
		<>
			<nav className='bg-blue-600 p-4 flex justify-between items-center'>
				<h1>School Directory</h1>
				<Link href={'/add'}>
					<h2 className='py-1.5 px-2.5 rounded-sm bg-blue-400 hover:bg-blue-800'>
						Add a school
					</h2>
				</Link>
			</nav>

			<ShowSchools />
		</>
	);
}
