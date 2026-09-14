import React from 'react'
import Link from 'next/link'
import LiveDate from '@/app/components/Livedate'

const page = () => {
  return (
    <div className="font-mono p-05">
      <LiveDate />
      <br />
      Dear diary,
      <br />
      <br />
      Today I'm hating on people that whitewash their culture for the comfort of others. 
      Unless you're an allahuakbar, it's totally okay to authentically pronounce your name correctly or eat molokhia for lunch. own it.
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/archive`}>
                archive
            </Link>
        </button>
    </div>
  )
}

export default page