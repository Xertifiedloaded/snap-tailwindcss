import React from 'react'
import icon from '../assets/images/image-hero-desktop.png'
export default function Hero() {
    return (
        <>
            <section className='w-[80%] sm:w-[90%] sm:mx-auto mx-auto flex items-center justify-between sm:flex-col-reverse '>
                <div className='w-[50%] sm:w-[100%] sm:text-center my-[20px]'>
                    <h1 className='text-[70px] md:text-[35px] lg:text-[35px] sm:text-[2rem] font-bold'>Make <br className='sm:hidden' /> Remote Work</h1>
                </div>
                <div className='width-[50%] sm:w-[100%]'>
                    <img className='w-[500px] sm:w-full h-[600px] md:w-[400px] md:h-[500px] sm:h-[400px] ' src={icon} alt="" />
                </div>
            </section>
        </>
    )
}
