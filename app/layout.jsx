
import '../styles/global.css';
import React from 'react'

import Nav from '../components/Nav'
import Provider from '../components/Provider'


export const metadata = {
    title: "Promtopia",
    descriptiom: "Discover & Share AI Prompts"

}
const RootLayout = ({children}) => {
  return (
    <html Lang="en">
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'>

                    </div>
                </div>
                
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout