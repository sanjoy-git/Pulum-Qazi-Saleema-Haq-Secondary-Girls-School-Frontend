import Container from '../components/Container';
import { NavLink } from 'react-router';

export default function NotFound() {
	return (
		<Container>
			{/* Path is missing page */}
			<div className="grid rounded-md min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-indigo-600">404</p>
					<h2 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
						Page not found
					</h2>
					<p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<NavLink to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Go back home
						</NavLink>
						<NavLink to="/contacts" className="text-sm font-semibold text-gray-900">
							Contact support <span aria-hidden="true">&rarr;</span>
						</NavLink>
					</div>
				</div>
			</div>
		</Container>
	);
}
