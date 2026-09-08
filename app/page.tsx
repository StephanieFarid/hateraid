import React from 'react'
import Link from 'next/link'
import LiveDate from '@/app/components/Livedate'

const page = () => {
  return (
    <div className="font-mono">
      <LiveDate />
      <br />
      Dear diary,
      <br />
      <br />
      Today I'm hating on people who are so into music that it makes an actual difference to them. They're weird and I don't like it. It's not that serious. 
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/archive`}>
                archive
            </Link>
        </button>
    </div>
  )
}

export default page