import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1 className="font-mono">
            previously I hated...
            <br />
            <br />
            <p>
                toes out in public, its unnccesary and very gross.
            </p>
            <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
            <Link href={`/`}>
                back to today
            </Link>
        </button>
        </h1>
    </div>
  )
}

export default page