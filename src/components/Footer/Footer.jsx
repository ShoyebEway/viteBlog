import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden  py-10 bg-white border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6">
                        <div className="flex h-full flex-wrap justify-between">
                            <div className="mb-4 inline-flex items-center text-gray-500">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
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