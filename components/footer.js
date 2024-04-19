import React from 'react'
import Image from 'next/image'
import idea from "../assets/idea_lab.jpg"

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font w-screen bg-yellow-50">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <Image src={idea} height={50} width={50} alt="" />
      <span className="ml-3 text-xl">HIT-AICTE IDEA LAB</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 HIT-AICTE IDEA LAB
    <br/><i className="fa-solid fa-envelope"></i><a href="mailto:iipc_hit@hithaldia.in"> iipc_hit@hithaldia.in</a>
    <br/><i className="fa-solid fa-phone"></i> <a href="tel:+91700-199-9192">+91 70019 99192</a> 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100082574844795' target={"_blank"}>
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" rel="noreferrer" href='https://instagram.com/hitaicteidealab?igshid=YmMyMTA2M2Y=' target={"_blank"}>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
    </span>
  </div>
</footer> 
  )
}

export default Footer