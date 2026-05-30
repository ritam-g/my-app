import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const page = async ({ params }) => {
    const { id } = await params
    return (
        <ProtectedRoute>

            <div>
                this is product details pae {id}
            </div>
        </ProtectedRoute>

    )
}

export default page
