import React from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from "react-icons/fa"
import { useState } from "react"
import socaialData from "../data/social.json"
import navData from "../data/navbar.json"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        {/* LOGO  */}
        <div >
            <img src="assets/logo1.jpg" alt=""  className='rounded-full'style={{width:"60px", height:"60px"}} />
        </div>
        {/* MENU */}
        <ul className='hidden md:flex'>
          {
            navData.map((navItem, index)=> (
                <li className='hover:text-lg hover:text-pink-600'>
                    <Link  to={navItem.path}  smooth={true}  duration={500} >
                          {navItem.name}
                    </Link>
                </li>
            ))
          }
        </ul>
        {/* Hamburger  */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
        {/* Mobile Menu  */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center " }>
            {
                navData.map((navItem, index)=> (
                    <li className='py-6 text-4xl'>
                         <Link onClick={handleClick} to={navItem.path} smooth={true} duration={500}>
                              {navItem.name}
                         </Link>
                    </li>
                ))
            }
        </ul>
        {/* Social icons  */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {
                  socaialData.map((socials,index)=>(
                    <li key={index} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 ${socials.bgcolor}`}>                    
                    <a href={socials.path} target='_blank' className={`flex items-center justify-between w-full font-bold ${socials.textColor}` }>
                    {socials.name} <img src={socials.icon} className='w-[30px]' alt="" />
                    </a>  
                </li>
                  ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar
