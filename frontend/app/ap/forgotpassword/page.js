import React from 'react'

import ForgotPassword from './components/ForgotPassword'

export const metadata = {
    title: 'Amazon Password Assistance',
    description: 'Amazon Password Assistance',
}

export default function page() {
    return (
        <div>
            <ForgotPassword />
        </div>
    )
}
