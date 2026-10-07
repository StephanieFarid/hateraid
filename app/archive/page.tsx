import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1 className="font-mono p-05">
            previously I hated...
            <br />
            <br />
            <p>
                people who whitewash their personlity for the comfort of others
                 <br />
                      Inspired by: Somwone pronouncing their name wrong because they were worried about the person they were saying it to being uncomfortable.

            </p>
            <br />
            <br />
            <p>
                old people that play in their mouth in public.
                 <br />
                      Inspired by: an old lady flossing during a conversation at the airport.

            </p>
            <br />
            <br />
            <p>
                toes out in public, its unnccesary and very gross.
                 <br />
                      Inspired by: The guy on my plane ride back from Guatemala wearing flip flops

            </p>
            <br />
            <br />
            <p>
                people who make music their entire personality.
                      <br />
                      Inspired by: Someone who said to me "music is my life it runs through my veins".

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