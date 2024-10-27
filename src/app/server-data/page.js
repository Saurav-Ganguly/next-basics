import Link from 'next/link';

async function getUsers() {
    try{    
        const data = await fetch('https://jsonplaceholder.typicode.com/users',);
        const users = await data.json();
        return users;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


export default async function ServerData() {
    const users = await getUsers();
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Server Data</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <ol className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <li key={user.id} className="hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                                <Link href={`/server-data/${user.id}`} className="block px-6 py-4 text-lg text-gray-700 hover:text-blue-600">
                                    {user.name}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );

}
