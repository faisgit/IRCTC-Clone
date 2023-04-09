import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  const [navitems, setNavItems] = useState('bars')
  const [display, setDisplay] = useState('hidden')

  const Menu = () => {

    if (navitems == 'bars') {
      setNavItems('close')
      setDisplay('block')

    }
    else {
      setNavItems('bars')
      setDisplay('hidden')

    }
  }
  return (
    <div>

      <nav
        className=" bg-blue-900 text-white md:bg-white md:text-black p-3 flex justify-between items-center shadow-lg w-screen fixed top-0 before:content-[''] before:absolute before:left-[0] before:h-[100%] before:w-[100%] before:bg-blue-900 md:before:bg-white before:z-[-1] before:opacity-[0.5]">
        <div className='flex justify-center items-center'>
          <span className='text-3xl md:hidden mr-3 ' ><i className={`fa fa-${navitems}`} onClick={Menu}></i></span>
          <Image src="/secondry-logo.png" className="ml-3 hidden md:block" alt="" />
          <h1 className='text-xl font-bold block md:hidden'>IRCTC</h1>
        </div>
        <div className='hidden xl:block'>
          <ul className="flex justify-center ">
            <li className="mx-2 text-xs">
              <Link href="#" className="bg-blue-900 px-4 py-2 text-white font-bold">LOGIN</Link>
            </li>
            <li className="mx-2 text-xs"><Link href="#">REGISTER</Link></li>
            <li className="mx-2 text-xs"><Link href="#">AGENT LOGIN</Link></li>
            <li className="mx-2 text-xs"><Link href="#">CONTACT US</Link></li>
            <li className="mx-2 text-xs"><Link href="#">ASK DIKSHA</Link></li>
            <li className="mx-2 text-xs">
              <Link href="#" className="bg-gray-300 py-2 px-4 font-bold">ALERTS</Link>
            </li>
            <li className="mx-2 text-xs font-bold">01-Mar-2023[09:16:48]</li>
            <li className="mx-2 text-xs font-bold">
              <Link href="#">A <sup>-</sup></Link>
            </li>
            <li className="mx-2 text-xs font-bold"><Link href="#">A</Link></li>
            <li className="mx-2 text-xs font-bold">
              <Link href="#">A<sup>+</sup></Link>
            </li>
            <li className="mx-2 text-xs font-bold"><Link href="#">हिंदी</Link></li>
          </ul>
          <ul className="flex justify-center mt-5 items-center">
            <li className="mx-2">
              <Link href="#" className="text-lg"><i className="fa fa-home text-gray-500" aria-hidden="true"></i></Link>
            </li>
            <li className="mx-2 text-xs group inline-block relative">
              <Link href="#" className="bg-blue-900 px-4 py-2 text-white font-bold  ">IRCTC EXCLUSIVE</Link>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-4">
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC eWallet</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC-iPay</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">e-Gift Vouchers</Link></li>

                </ul>
              </div>
            </li>
            <li className="mx-2 text-xs group inline-block relative">
              <Link href="#" className="underline font-bold text-orange-500">TRAINS</Link>

              <div className="absolute  text-gray-700 mt-[-7px] hidden group-hover:block text-sm ">
                <span className="mdi mdi-triangle mx-8 text-orange-500" />
                <ul className="mx-3 mt-[-8px] shadow-2xl">
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> BookTicket</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> ForeignTourist Booking</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Connecting Journey Booking</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> IRCTC TRAINS</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Cancel Ticket</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> PNREnquiry</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Train Schedule</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Track Your Train</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> FTR Coach/Train</Link></li>
                </ul>
              </div>

            </li>
            <li className="mx-2 text-xs"><Link href="#" className="font-bold">BUSES</Link></li>
            <li className="mx-2 text-xs"><Link href="#" className="font-bold">FLIGHT</Link></li>
            <li className="mx-2 text-xs"><Link href="#" className="font-bold">HOTELS</Link></li>
            <li className="mx-2 text-xs group inline-block relative">
              <Link href="#" className="font-bold">HOLIDAYS</Link>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Tourist Trains</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Tour Packeges</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Stays</Link></li>

                </ul>
              </div>

            </li>
            <li className="mx-2 text-xs  group inline-block relative">
              <Link href="#" className="font-bold">LOYALTY</Link>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm transition ease-in-out duartion-700 ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC SBI Credit Card</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC BOB Credit Card</Link></li>
                </ul>
              </div>
            </li >
            <li className="mx-2 text-xs group inline-block relative">
              <Link href="#" className="font-bold">MEALS</Link>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Ordered Food-E-Catering</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Cooked Food Menu</Link></li>
                </ul>
              </div>

            </li >
            <li className="mx-2 text-xs group inline-block relative">
              <Link href="#" className="font-bold">PROMOTION</Link>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Ordered Food-E-Catering</Link></li>
                  <li className="w-60"> <Link className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Cooked Food Menu</Link></li>
                </ul>
              </div>

            </li >

            <li className="mx-2 text-xs"><Link href="#" className="font-bold">MORE</Link></li>
          </ul >
        </div>
        <div className='flex justify-center items-center'>
          <Image src="/logo.png" className="mr-3 hidden md:block" alt="" />
          <span className='text-3xl hidden md:block xl:hidden mr-3 ' ><i className={`fa fa-${navitems}`} onClick={Menu}></i></span>
        </div>
        {/* Mobile and Tablet view */}
        <ul className={` xl:hidden   z-[-1] fixed  bg-white  text-black  w-[200px] h-full left-0   py-4  pl-7 opacity-100 ${display} top-[59px] md:top-[104px] duration-500 by-3  before:content-[''] before:absolute before:h-full before:w-[100vw]  before:bg-black before:opacity-[0.5] before:z-[-1] before:left-[200px] before:top-[0] shadow-inner  `}  >
          <div className='mt-[1px] mb-[1px]'>
            <li className='mb-1'><Link href="#" className="bg-blue-900 px-4 py-2 text-white font-bold">LOGIN</Link></li>
            <li><Link href="/" className=' text-xs font-bold'>01-Mar-2023[09:16:48]</Link></li>
          </div>
          <hr className='mr-[13px] mt-[6px] ' />
          <li className='text-sm mt-4'><Link href="#" className="bg-blue-900 px-4 py-2 text-white font-bold  ">IRCTC EXCLUSIVE</Link></li>
          <li className='text-sm mt-4'><Link href="#" className="underline font-bold text-orange-500">TRAINS</Link></li>
          <li className="mt-4 text-sm"><Link href="#">BUSES</Link></li>
          <li className="mt-4 text-sm"><Link href="#">FLIGHT</Link></li>
          <li className="mt-4 text-sm"><Link href="#">HOTELS</Link></li>
          <li className="mt-4 text-sm"><Link href="#">HOLIDAYS</Link></li>
          <li className="mt-4 text-sm"><Link href="#">LOYALITY</Link></li>
          <li className="mt-4 text-sm"><Link href="#">MEALS</Link></li>
          <li className="mt-4 text-sm"><Link href="#">PROMOTIONS</Link></li>
          <li className="mt-4 text-sm"><Link href="#">MORE</Link></li>
          <li className="mt-4 text-sm"><Link href="#">CONTACT US</Link></li>
          <li className="mt-4 text-sm"><Link href="#">AGENT LOGIN</Link></li>
          <li className="mt-4 text-sm"><Link href="#">ASK DISHA</Link></li>
          <li className="mt-4 text-sm"><Link href="#">HOLIDAYS</Link></li>
          <li className='mt-4 text-sm'><Link href="#">हिंदी</Link></li>

        </ul>
        <div className="flex justify-center items-center mr-2  md:hidden ">

          <span> <i className='fa fa-bell'></i> </span>
          <span> <i className='fa fa-user ml-3'></i> </span>
        </div>

      </nav >

      

    </div>
  )
}

export default Navbar



