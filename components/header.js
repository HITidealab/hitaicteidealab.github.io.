import React from 'react'

import Image from 'next/image'
import idea from "../assets/idea_lab.jpg"
import hit from "../assets/hit_logo.jpg"

const Header = () => {
  return (
    <div className='flex justify-evenly items-center mt-5 w-screen'>
    <Image width={150} height={150} src={hit} alt="hit"/>
    <div className='flex flex-col justify-center items-center'>
    <h1 className='xs:text-5xl text-3xl text-orange-700 font-bold text-center'>HIT-AICTE IDEA LAB</h1>
    <p className='text-[20px] -mt-5 text-center'>Haldia Institute of Technology</p>
    <p className='text-[12px] -mt-5 text-center'>(An Autonomous Institute Under MAKAUT)</p>
    </div>
    <Image width={150} height={150} src={idea} alt="idea"/>
  </div>
  )
}

export default Header