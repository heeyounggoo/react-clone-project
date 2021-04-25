import React from 'react'
import Header from './Header'
import './Body.css'

export default function Body ({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify}/>
    </div>
  )
}
