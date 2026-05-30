import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <ProtectedRoute><div>
      this is home
    </div></ProtectedRoute>

  )
}

export default page
