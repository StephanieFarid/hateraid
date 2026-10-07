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
      Today I'm hating on people that love to dance.
      Like, I'm sure when David did it, it was super cool and all, but in the year of our Lord 2026, it's not the same. I heard an actual grown woman explaining a story and using the exact phrase "i was dancing too hard"-pause and look up for an aside to say that she goes real hard at festivals and then continue her sentence as if that's a normal thing to say.
      <br />
      <br />
      I've said it before, and I'll say it again: ew.
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/archive`}>
                archive
            </Link>
        </button>
    </div>
  )
}

export default page