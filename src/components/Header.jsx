import React from 'react'
import '../index.css'

export default function Header() {
  return (
    <div>
      <header id='header'>
            <img src="./public/siteIcon.jpeg" width={100} id='siteIcon'/>
            <h1 id='headerTitle'>Example Title</h1>
      </header>
    </div>
  )
}
