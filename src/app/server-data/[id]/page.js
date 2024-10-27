import Link from 'next/link';

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
}

export default async function UserPage({ params }) {
  let user;
  try {
    user = await getUser(params.id);
    // Check if user exists
    if (!user) {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600 mb-4">
              {error.message === 'User not found'
                ? 'The requested user could not be found.'
                : 'An error occurred while loading user data. Please try again later.'}
            </p>
            <Link href="/server-data" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-150 ease-in-out">
              Back to Users
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User Details</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{user.name}</h2>
          {/* Add aria-label for better accessibility */}
          <p className="text-gray-600 mb-2" aria-label="Email"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-600 mb-2" aria-label="Phone"><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p className="text-gray-600 mb-2" aria-label="Website"><span className="font-semibold">Website:</span> {user.website}</p>
          <p className="text-gray-600 mb-4" aria-label="Company"><span className="font-semibold">Company:</span> {user.company.name}</p>
          <Link href="/server-data" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-150 ease-in-out">
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
