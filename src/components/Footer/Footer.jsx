import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden  py-2 bg-white border border-t-2 border-t-black dark:bg-slate-800">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div className="flex h-full flex-wrap justify-between">
                            <div className="inline-flex items-center text-gray-500 dark:text-white">
                                <Link to="/">
                                    <Logo width="60px"/>
                                </Link>
                            </div>
                            <div className='flex items-center'>
                                <p className="text-sm text-slate-600 dark:text-white">
                                    &copy; Copyright 2023. All Rights Reserved by UT.
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
    </section>
  )
}

export default Footer