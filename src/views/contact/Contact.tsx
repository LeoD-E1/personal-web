import React, { useState, FormEvent } from 'react';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
	};

	return (
		<section
			id='contact'
			className='h-[50vh] w-full flex justify-center items-center'
		>
			<article className='layout-container border-t p-5 sm:p-20 border-gray-light'>
				<h2 className='text-2xl font-bold mb-4'>Get in touch</h2>
				<div className='max-w-md mx-auto'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='name' className='block font-medium'>
								Nombre
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={name}
								onChange={event => setName(event.target.value)}
								required
								className='w-full border border-gray rounded-md shadow-sm focus:border-night-blue outline-none p-2'
							/>
						</div>
						<div>
							<label htmlFor='email' className='block font-medium'>
								Correo electrónico
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
								onChange={event => setEmail(event.target.value)}
								required
								className='w-full border border-gray rounded-md shadow-sm focus:border-night-blue outline-none p-2'
							/>
						</div>
						<div>
							<label htmlFor='message' className='block font-medium'>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								value={message}
								onChange={event => setMessage(event.target.value)}
								required
								className='w-full border border-gray rounded-md shadow-sm focus:border-night-blue outline-none p-2'
							></textarea>
						</div>
						<div>
							<button
								type='submit'
								className='inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-night-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-night-blue'
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</article>
		</section>
	);
};

export default Contact;
