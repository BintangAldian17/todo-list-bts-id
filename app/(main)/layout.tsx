'use client'

import { useLocalStorage } from '@/hooks'
import { useRouter } from 'next/navigation'
import React, { useEffect, useLayoutEffect, useState } from 'react'

function MainLayout({children}:{children: React.ReactNode}) {
    const router = useRouter()

    useLayoutEffect(()=> {
        const getToken = localStorage.getItem('TOKEN')
        console.log(getToken)
        if(!getToken){
            router.push('/login')
        }
    }, [])
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center max-w-5xl mx-auto'>
      {children}
    </main>
  )
}

export default MainLayout
