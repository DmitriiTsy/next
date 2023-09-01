'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession()

    const [providers, setProviderss] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()
            setProviderss(response)
        }
        setProviders()
    }, [])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
                className='object-contain' 
                alt="Promptopia Logo" 
                width={30} 
                height={30} 
                src="/assets/images/logo.svg"/>
            <p className='logo_text'>
                promptopia
            </p>
        </Link>
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>
                        create post
                    </Link>
                    <button type='button' onClick={signOut} className='outline_btn'>
                        sign out
                    </button>

                    <Link href="/profile">
                        <Image 
                            alt="logo_avatar"
                            width={37}
                            height={37}
                            className='rounded-full'
                            src={session?.user.image}
                        />
                    </Link>
                </div> ) 
                : 
                <>
                    {providers &&  
                    Object.values(providers).map((provider) => (
                        <button
                            type='button'
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                            
                        >
                            Sign In
                        </button>
                    ))}
                
                </>
            }
        </div>
        <div
            className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <Image 
                            width={37}
                            height={37}
                            className='rounded-full'
                            src={session?.user.image}
                            alt='profile'
                            onClick={() => setToggleDropDown((prev) => !prev)}
                        />
                        {toggleDropDown && (
                            <div className='dropdown'>
                                <Link 
                                    href="/profile"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link 
                                    href="/create-prompt"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropDown(false)
                                        signOut()
                                        }
                                    }
                                    className='mt-5 w-full black_btn'>
                                        Sign Out
                                </button>
                            </div>
                        )}

                    </div>
                ) : (
                    <>
                    {providers &&  
                    Object.values(providers).map((provider) => (
                        <button
                            type='button'
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className='black_btn'
                            
                        >
                            Sign In
                        </button>
                    ))}
                    </>
                )}
        </div>
    </nav>
  )
}

export default Nav