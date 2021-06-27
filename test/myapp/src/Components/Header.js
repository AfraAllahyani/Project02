import './StyleHeader.css';
import React from 'react'
import Signin from './Signin'

export default function Header() {
  return (
    <div>
      <p className="header">NASA APIs</p>
      <Signin />
    </div>
  )
}


