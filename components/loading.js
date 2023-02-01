import React from 'react'
import Image from "next/image"
import loading from "../assets/load.png"

const Loading = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <div className='animate__animated animate__wobble'>
                <Image src={loading} alt="Loading" width={150} height={150} />
            </div>
        </div>
    )
}

export default Loading