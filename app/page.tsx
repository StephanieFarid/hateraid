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
      Today I'm hating on people that wear headphones in public.
      <br />
      <br />
      Airport? fine, Gym? fine. But if you're in a place where being aware of surroundings and communicating with others is a necessary, then WHY???
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/archive`}>
                archive
            </Link>
        </button>
    </div>
  )
}

export default page