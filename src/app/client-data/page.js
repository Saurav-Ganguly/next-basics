'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr'
export default function ClientData() {
    // const [loading, setLoading] = useState(true);
    // const [users, setUsers] = useState([]);

    // async function getUsers() {
    //     try{
               
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const users = await res.json();
    //         if(users.length > 0){
    //             setLoading(false);
    //             setUsers(users);
    //         }
    //         return users;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    // useEffect(() => {
    //     getUsers()
            
    // }, []);
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

    if(isLoading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error fetching data</div>;
    }
    
    return (
        <div>
            <h1>Client Data</h1>
            <div>
                {data.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>
        </div>
    );
}