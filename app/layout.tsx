import type { Metadata } from 'next'
import { useEffect } from 'react';
import Image from 'next/image'

import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: '@doniczka',
  description: 'portfolio @doniczka | by doniczka',
  themeColor: '2b2d31',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    
    <html lang="pl" className='scroll-smooth'>
      <body>
        {children}
        <footer className='w-full pt-5 pb-5'>
          <p className='text-gray-600 text-center'> Stworzone z 🪐 przez <a href="https://github.com/doniczek" className='text-green-200 hover:text-green-400'>@doniczka</a></p>
        </footer>  
      </body>
    </html>
  )
}