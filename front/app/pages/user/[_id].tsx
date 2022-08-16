import React from 'react'
import { useRouter } from 'next/router'

const user = () => {
  const router = useRouter()
  const userId = router.query._id
  return (
    <div>
      user_id:{userId}
    </div>
  )
}

export default user