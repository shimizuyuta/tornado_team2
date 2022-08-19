import React from 'react'
import { useRouter } from 'next/router'

const plan = () => {
  const router = useRouter()
  const planId = router.query._id
  return <div>plan:{planId}</div>
}

export default plan
