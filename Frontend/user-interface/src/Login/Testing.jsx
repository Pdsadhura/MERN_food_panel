import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Testing() {

    const location = useLocation()

    console.log("dhfuir",location)

  return (
    <div>Testing</div>
  )
}
