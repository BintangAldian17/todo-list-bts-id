import React from 'react'

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center max-w-80 mx-auto'>
      {children}
    </main>
  )
}

export default AuthLayout
