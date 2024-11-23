import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <main className='navigation-container'>
      <h1>Flashcards System</h1>
      <nav>
        <div className='link-styles'>
          <Link href={'/'} style={{textDecoration: 'none', color: 'black'}}>Home</Link>
        </div>
        <div className='link-styles'>
          <Link href={'/cards'} style={{textDecoration: 'none', color: 'black'}}>Review Cards</Link>
        </div>
        <div className='link-styles'>
          <Link href={'/add'} style={{textDecoration: 'none', color: 'black'}}>Create New Cards</Link>
        </div>
      </nav>
    </main>
  )
}
