import React, { Children } from 'react'
import '@styles/global.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

export const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}
