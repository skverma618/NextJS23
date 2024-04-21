import React from 'react'

interface User {
    id: number
    name: string
}

const UserPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    //     cache: 'no-store'
    // })

    // To disable caching : cache: 'no-store'
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { next: {
            revalidate: 10,
        }})

    const users: User[] = await res.json()

    return (
        <div>
            User Page
            <div>
                <p>
                    {new Date().toLocaleTimeString()}
                    {/* In production, it will not change by default bcoz it will be treated as a static page by default. Whenever we use fetch function in a page, it will store data in cache and thus, treats the page as a static page */}
                </p>
            </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage
