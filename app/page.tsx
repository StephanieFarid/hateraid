import React from 'react'
import Link from 'next/link'
import LiveDate from '@/app/components/Livedate'

const page = () => {
  return (
    <div className="font-mono p-20">
      <LiveDate />
      <br />
      Dear diary,
      <br />
      <br />
      Today I'm hating on old people that play in their mouth in pblic. I was at the airport and an OLD WOMAN was chatting with a few others
      and straight up flossing her teeth with a floss pick. ewwwWWWWWW.
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/archive`}>
                archive
            </Link>
        </button>
    </div>
  )
}

export default page