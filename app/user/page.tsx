import React from 'react'

interface User {
    id: number
    name: string
}

const UserPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    //     cache: 'no-store'
    // })

    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { next: {
            revalidate: 10,
        }})

    const users: User[] = await res.json()

    return (
        <div>
            User Page
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage
