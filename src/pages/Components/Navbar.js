import React from 'react'
import { useState } from 'react'
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
          <Image src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png" className="ml-3 hidden md:block" alt="" />
          <h1 className='text-xl font-bold block md:hidden'>IRCTC</h1>
        </div>
        <div className='hidden xl:block'>
          <ul className="flex justify-center ">
            <li className="mx-2 text-xs">
              <a href="#" className="bg-blue-900 px-4 py-2 text-white font-bold">LOGIN</a>
            </li>
            <li className="mx-2 text-xs"><a href="#">REGISTER</a></li>
            <li className="mx-2 text-xs"><a href="#">AGENT LOGIN</a></li>
            <li className="mx-2 text-xs"><a href="#">CONTACT US</a></li>
            <li className="mx-2 text-xs"><a href="#">ASK DIKSHA</a></li>
            <li className="mx-2 text-xs">
              <a href="#" className="bg-gray-300 py-2 px-4 font-bold">ALERTS</a>
            </li>
            <li className="mx-2 text-xs font-bold">01-Mar-2023[09:16:48]</li>
            <li className="mx-2 text-xs font-bold">
              <a href="#">A <sup>-</sup></a>
            </li>
            <li className="mx-2 text-xs font-bold"><a href="#">A</a></li>
            <li className="mx-2 text-xs font-bold">
              <a href="#">A<sup>+</sup></a>
            </li>
            <li className="mx-2 text-xs font-bold"><a href="#">हिंदी</a></li>
          </ul>
          <ul className="flex justify-center mt-5 items-center">
            <li className="mx-2">
              <a href="#" className="text-lg"><i className="fa fa-home text-gray-500" aria-hidden="true"></i></a>
            </li>
            <li className="mx-2 text-xs group inline-block relative">
              <a href="#" className="bg-blue-900 px-4 py-2 text-white font-bold  ">IRCTC EXCLUSIVE</a>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-4">
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC eWallet</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC-iPay</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">e-Gift Vouchers</a></li>

                </ul>
              </div>
            </li>
            <li className="mx-2 text-xs group inline-block relative">
              <a href="#" className="underline font-bold text-orange-500">TRAINS</a>

              <div className="absolute  text-gray-700 mt-[-7px] hidden group-hover:block text-sm ">
                <span className="mdi mdi-triangle mx-8 text-orange-500" />
                <ul className="mx-3 mt-[-8px] shadow-2xl">
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> BookTicket</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> ForeignTourist Booking</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Connecting Journey Booking</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> IRCTC TRAINS</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Cancel Ticket</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> PNREnquiry</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Train Schedule</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> Track Your Train</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#"> FTR Coach/Train</a></li>
                </ul>
              </div>

            </li>
            <li className="mx-2 text-xs"><a href="#" className="font-bold">BUSES</a></li>
            <li className="mx-2 text-xs"><a href="#" className="font-bold">FLIGHT</a></li>
            <li className="mx-2 text-xs"><a href="#" className="font-bold">HOTELS</a></li>
            <li className="mx-2 text-xs group inline-block relative">
              <a href="#" className="font-bold">HOLIDAYS</a>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Tourist Trains</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Tour Packeges</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Stays</a></li>

                </ul>
              </div>

            </li>
            <li className="mx-2 text-xs  group inline-block relative">
              <a href="#" className="font-bold">LOYALTY</a>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm transition ease-in-out duartion-700 ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC SBI Credit Card</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">IRCTC BOB Credit Card</a></li>
                </ul>
              </div>
            </li >
            <li className="mx-2 text-xs group inline-block relative">
              <a href="#" className="font-bold">MEALS</a>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Ordered Food-E-Catering</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Cooked Food Menu</a></li>
                </ul>
              </div>

            </li >
            <li className="mx-2 text-xs group inline-block relative">
              <a href="#" className="font-bold">PROMOTION</a>

              <div className="absolute  text-gray-700 hidden   group-hover:block text-sm ">
                <ul className=" shadow-2xl mt-[-8px]">
                  <span className="mdi mdi-triangle mx-8 text-orange-500"></span>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Ordered Food-E-Catering</a></li>
                  <li className="w-60"> <a className="rounded-b bg-white hover:bg-orange-100 font-semibold py-2 px-4 block whitespace-no-wrap" href="#">Cooked Food Menu</a></li>
                </ul>
              </div>

            </li >

            <li className="mx-2 text-xs"><a href="#" className="font-bold">MORE</a></li>
          </ul >
        </div>
        <div className='flex justify-center items-center'>
          <Image src="https://www.irctc.co.in/nget/assets/images/logo.png" className="mr-3 hidden md:block" alt="" />
          <span className='text-3xl hidden md:block xl:hidden mr-3 ' ><i className={`fa fa-${navitems}`} onClick={Menu}></i></span>
        </div>
        {/* Mobile and Tablet view */}
        <ul className={` xl:hidden   z-[-1] fixed  bg-white  text-black  w-[200px] h-full left-0   py-4  pl-7 opacity-100 ${display} top-[59px] md:top-[104px] duration-500 by-3  before:content-[''] before:absolute before:h-full before:w-[100vw]  before:bg-black before:opacity-[0.5] before:z-[-1] before:left-[200px] before:top-[0] shadow-inner  `}  >
          <div className='mt-[1px] mb-[1px]'>
            <li className='mb-1'><a href="#" className="bg-blue-900 px-4 py-2 text-white font-bold">LOGIN</a></li>
            <li><a href="/" className=' text-xs font-bold'>01-Mar-2023[09:16:48]</a></li>
          </div>
          <hr className='mr-[13px] mt-[6px] ' />
          <li className='text-sm mt-4'><a href="#" className="bg-blue-900 px-4 py-2 text-white font-bold  ">IRCTC EXCLUSIVE</a></li>
          <li className='text-sm mt-4'><a href="#" className="underline font-bold text-orange-500">TRAINS</a></li>
          <li className="mt-4 text-sm"><a href="#">BUSES</a></li>
          <li className="mt-4 text-sm"><a href="#">FLIGHT</a></li>
          <li className="mt-4 text-sm"><a href="#">HOTELS</a></li>
          <li className="mt-4 text-sm"><a href="#">HOLIDAYS</a></li>
          <li className="mt-4 text-sm"><a href="#">LOYALITY</a></li>
          <li className="mt-4 text-sm"><a href="#">MEALS</a></li>
          <li className="mt-4 text-sm"><a href="#">PROMOTIONS</a></li>
          <li className="mt-4 text-sm"><a href="#">MORE</a></li>
          <li className="mt-4 text-sm"><a href="#">CONTACT US</a></li>
          <li className="mt-4 text-sm"><a href="#">AGENT LOGIN</a></li>
          <li className="mt-4 text-sm"><a href="#">ASK DISHA</a></li>
          <li className="mt-4 text-sm"><a href="#">HOLIDAYS</a></li>
          <li className='mt-4 text-sm'><a href="#">हिंदी</a></li>

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



