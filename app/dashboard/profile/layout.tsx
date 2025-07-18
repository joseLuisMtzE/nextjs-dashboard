import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <p>Profile Layout</p>
        {children}
    </div>
  )
}
