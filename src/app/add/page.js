import AddSchoolForm from './addSchool';

export default function Page() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<h1 className='text-2xl mb-8'>Add A School to the list</h1>
			<AddSchoolForm />
		</div>
	);
}
