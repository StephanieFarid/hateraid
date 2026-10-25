// import React from 'react'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <div>
//             <p>
//                 people who love to dance
//                  <br />
//                       Inspired by: Somwone pronouncing their name wrong because they were worried about the person they were saying it to being uncomfortable.

//             </p>
//             <br />
//             <br />
           
//     </div>
//   )
// }

// export default page

import React from "react";
import type { Archive } from "../../lib/schema"

interface ArchiveCards {
  archive: Archive;
}

const ArchivePreview = ({ archive }: ArchivePreviewProps) => {
  const hate = archive.hate;
  const inspo = archive.inspo;

  

  return (
    
  );
};

export default ShoppingPreview;