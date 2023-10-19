import React from 'react'
import logo from '../assets/logo.svg'

function Logo({width="40px"}) {
  return (
    <div>
      <img src={logo} className="logo react" alt="React logo" width={width}/>
    </div>
  )
}

export default Logo