'use client';

import { useEffect } from 'react';
import { useState } from 'react';

function ShowSchools() {
	const [schools, setSchools] = useState([]);
	useEffect(() => {
		const fetchSchools = async () => {
			const response = await fetch('/api/schools');
			const data = await response.json();
			setSchools(data);
		};
		fetchSchools();
	}, []);
	return (
		<>
			<div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{schools.map((school) => (
					<div
						key={school.id}
						className='border border-gray-300 rounded-md p-4'
					>
						<img
							src={`/schools/${school.image}`}
							onError={(e) => {
								e.target.src = '/default_school.svg';
							}}
							alt={school.name}
							className='w-full h-48 object-cover mb-4 rounded-md'
						/>
						<h2 className='text-xl font-bold mb-2'>{school.name}</h2>
						<p className='mb-1'>
							<strong>Address:</strong> {school.address}, {school.city},{' '}
							{school.state}
						</p>
						<p className='mb-1'>
							<strong>City:</strong> {school.city}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
export default ShowSchools;
