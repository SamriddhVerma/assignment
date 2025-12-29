'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

function AddSchoolForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const onSubmit = (data) => {
		console.log(data);
		const name = data['Name'];
		const address = data['Address'];
		const city = data['City'];
		const state = data['State'];
		const contact = data['Contact'];
		const email_id = data['Email'];
		const imageFile = data['schoolImage'][0];

		const reader = new FileReader();
		reader.onloadend = () => {
			const imageDataUrl = reader.result;

			fetch('/api/schools', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					address,
					city,
					state,
					contact,
					email_id,
					image: imageDataUrl,
				}),
			})
				.then((response) => {
					if (response.ok) {
						alert('School added successfully!');
						router.replace('/');
					} else {
						alert('Failed to add school.');
					}
				})
				.catch(() => {
					alert('Failed to add school.');
				});
		};
		reader.readAsDataURL(imageFile);
	};
	const imageFile = watch('schoolImage');
	const imageSrc =
		imageFile && imageFile[0] ? URL.createObjectURL(imageFile[0]) : null;

	return (
		<form
			className='flex flex-col space-y-3 p-5 justify-center items-center border border-gray-300 rounded-md'
			onSubmit={handleSubmit(onSubmit)}
		>
			{imageSrc && (
				<img
					src={imageSrc}
					alt='Preview'
					className='w-32 h-32 object-cover mb-2'
				/>
			)}

			<label>
				Name <br />
				<input
					className={`border ${errors.Name && 'border-red-500'}`}
					placeholder='Name'
					{...register('Name', { required: true })}
				/>
			</label>
			{errors.Name && <span>This field is required</span>}
			<label>
				Address <br />
				<input
					className={`border ${errors.Address && 'border-red-500'}`}
					placeholder='Address'
					{...register('Address', { required: true })}
				/>
			</label>
			{errors.Address && <span>This field is required</span>}
			<label>
				City <br />
				<input
					className={`border ${errors.City && 'border-red-500'}`}
					placeholder='City'
					{...register('City', { required: true })}
				/>
			</label>
			{errors.City && <span>This field is required</span>}
			<label>
				State <br />
				<input
					className={`border ${errors.State && 'border-red-500'}`}
					placeholder='State'
					{...register('State', { required: true })}
				/>
			</label>
			{errors.State && <span>This field is required</span>}
			<label>
				Contact <br />
				<input
					className={`border ${errors.Contact && 'border-red-500'}`}
					placeholder='Contact'
					{...register('Contact', {
						required: true,
						pattern: /^[0-9]{7,13}$/,
					})}
				/>
			</label>
			{errors.Contact && (
				<span>
					{errors.Contact.type === 'pattern' &&
						'Enter the number without country code or spaces'}
					{errors.Contact.type === 'required' && 'This field is required'}
				</span>
			)}
			<label>
				Email ID <br />
				<input
					className={`border ${errors.Email && 'border-red-500'}`}
					type='email'
					placeholder='Email ID'
					{...register('Email', { required: true })}
				/>
			</label>
			{errors.Email && (
				<span>
					{errors.Email.type === 'required' && 'This field is required'}
				</span>
			)}

			<label>
				School Image <br />
				<input
					className='border'
					type='file'
					accept='image/*'
					{...register('schoolImage')}
				/>
			</label>

			<button className='w-full bg-blue-200 rounded-lg py-2'>Submit</button>
		</form>
	);
}

export default AddSchoolForm;
