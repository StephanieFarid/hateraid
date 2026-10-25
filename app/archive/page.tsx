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
                people who LOVE to dance
                 <br />
                      Inspired by: Somwone who said she "danced too hard" that she lost her airpod. What does that even mean??

            </p>
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









// 'use client';

// import ShoppingCards from "../components/ShoppingCards"
// import { InstantSearch, Hits, SearchBox, Configure } from 'react-instantsearch';
// import { searchClient } from "../lib/typesense";


// const Hit = ({ hit }: { hit: Shopping }) => {
//   return <ShoppingCards shopping={hit} />;
// };

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#F4ACB7] p-10">
//       <h1 className="text-[#9D8189] text-8xl">
//         SHOPPING TRENDS
//       </h1>
//       <InstantSearch indexName="shopping" searchClient={searchClient}>
//         <div className="m-6 p-4 bg-[#FFE5D9]">
//           <SearchBox 
//             placeholder="Search purchases..." 
//             className="py-6 px-8"
//           />
//         </div>
        
//         <Configure hitsPerPage={50} />

//         <Hits 
//           hitComponent={Hit} 
//           classNames={{
//             list: 'grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6',
//           }}
//         />
//       </InstantSearch>
//     </main>
//   )
// }






// import React from 'react'
// import Link from 'next/link'

// const Hit = ({ hit }: { hit: Archive }) => {
//   return <archiveCards archive={hit} />;
// };

// const page = () => {
//   return (
//     <div>
//         <h1 className="font-mono p-05">
//             previously I hated...
//             <br />
//             <br />
//             <p>
//                 people who whitewash their personlity for the comfort of others
//                  <br />
//                       Inspired by: Somwone pronouncing their name wrong because they were worried about the person they were saying it to being uncomfortable.

//             </p>
//             <br />
//             <br />
//             <p>
//                 old people that play in their mouth in public.
//                  <br />
//                       Inspired by: an old lady flossing during a conversation at the airport.

//             </p>
//             <br />
//             <br />
//             <p>
//                 toes out in public, its unnccesary and very gross.
//                  <br />
//                       Inspired by: The guy on my plane ride back from Guatemala wearing flip flops

//             </p>
//             <br />
//             <br />
//             <p>
//                 people who make music their entire personality.
//                       <br />
//                       Inspired by: Someone who said to me "music is my life it runs through my veins".

//             </p>


//             <button className="font-mono fixed bottom-6 right-6 z-50 bg-pink-100 text-black px-4 py-2 rounded-full shadow-lg hover:bg-pink-200 transition" >
//             <Link href={`/`}>
//                 back to today
//             </Link>
//         </button>
//         </h1>
//     </div>
//   )
// }

// export default page