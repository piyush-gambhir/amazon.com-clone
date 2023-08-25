import React from 'react'

import Login from './components/Login'

export const metadata = {
    title: 'Amazon Sign In',
    description: 'Amazon Sign In',
}

export default function page() {
    return (
        <div className="">
            <Login />
        </div>
    )
}
