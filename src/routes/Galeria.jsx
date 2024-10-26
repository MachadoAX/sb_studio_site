import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from "flowbite-react";

import img1 from '../assets/img/img1.jpeg'
import img2 from '../assets/img/img2.jpeg'
import img3 from '../assets/img/img3.jpeg'
import img4 from '../assets/img/img4.jpeg'

const Galeria = () => {
  return (
<>
<Header/>
<div className="grid grid-cols-2 gap-2 p-6 bg-[#0b0e37]">
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img3} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={img4} alt=""/>
        </div>
    </div>
    <Footer/>
</>
  )
}

export default Galeria