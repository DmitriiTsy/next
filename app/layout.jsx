
import '@styles/globals.css';
import React from 'react'


export const metadata = {
    title: "Promtopia",
    descriptiom: "Discover & Share AI Prompts"

}
const RootLayout = () => {
  return (
    <html Lang="en">
        <body>
            <div className='main'>
                <div className='gradient'>

                </div>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout