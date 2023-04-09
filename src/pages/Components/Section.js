import React from 'react'


const Section = () => {
    return (
        <div className=' flex flex-col xl:flex-row md:items-center bg-white md:bg-hero bg-no-repeat bg-center bg-cover mt-24  h-[46rem]'>
            <div className='mx-auto mt-1 md:mt-20 hidden md:flex md:flex-col'>
                <div className='flex'>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 w-[18rem]'>

                        <img src="https://www.irctc.co.in/nget/assets/images/icons/pnr.png" alt="" className="" />
                        <h1 className="mx-auto "><a href="#" className="text-xs font-bold">PNR STATUS</a></h1>

                    </div>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 mx-4 w-[20rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/chart.png" alt="" className="" />
                        <h1 className="mx-auto"><a href="#" className="text-xs font-bold">CHARTS/VACANCY</a></h1>
                    </div>
                </div>

                <div className='bg-white w-[39rem] h-[31rem] flex flex-col p-3' >
                    <div className='  flex justify-between'>
                        <img src="https://www.irctc.co.in/nget/assets/images/logo_top_eng.jpg" alt="" />
                        <h1 className="text-xl text-blue-900 font-bold mt-2">BOOK TICKET</h1>
                        <img src="https://www.irctc.co.in/nget/assets/images/G20_Logo.png" alt="" className="mt-2" />
                    </div>
                    {/* Main Form  */}
                    <form action='#' className='px-4 py-5'>
                        <div className='flex justify-between'>
                            <div className='flex items-center border border-solid rounded border-slate-600 text-lg focus:outline focus:border-[2px] focus:border-solid focus:outline-[2px]'>
                                <i className='fa fa-location-arrow text-blue-900 px-2' />
                                <input type="text" className='h-12 w-72 outline-none text-blue-900 ' placeholder='Form' />
                            </div>
                            <div className='flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 '>
                                <input type="date"
                                    className="h-12 w-48 outline-none mr-7  text-blue-900 pr-3 pl-3"
                                    value="05/03/2023" />
                            </div>
                        </div>
                        {/* reverse */}
                        <div className=" ml-32 my-2 ">
                            <a href="#"
                                className="bg-blue-50 border border-solid border-bg-blue-50 p-1 rounded-full hover:border-blue-900 focus:border-bg-blue-900"><i
                                    className="fa fa-exchange  text-[15px] "></i></a>
                        </div>
                        {/*  */}
                        <div className="flex justify-between">
                            <div className="flex items-center  border border-solid rounded border-slate-700 hover:border-blue-700">
                                <i className="fa fa-map-marker text-blue-900   px-2 ">
                                </i>
                                <input type="text"
                                    className=" h-12 w-72 outline-none text-blue-900 text-lg"
                                    placeholder="To" />

                            </div>
                            <div className="flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 ">
                                <i className="fa fa-briefcase  px-2 text-blue-900"></i>

                                <select
                                    className=" h-12 w-48 bg-white outline-none text-blue-900"
                                    placeholder="From">
                                    <option>All Classes</option>
                                    <option >Anubhuti Class (EA)</option>
                                    <option >AC First Class (1A)</option>
                                    <option>Vistadome AC (EV)</option>
                                    <option>Exec. Chair Car (EC)</option>
                                    <option>AC 2 Teir (3A)</option>
                                    <option>First Class (FC)</option>
                                    <option>AC 3 Teir (3A)</option>
                                    <option>Ac 3 Economy (3E)</option>
                                    <option>Vistadome Chair Car (VC)</option>
                                    <option>AC Chair car (CC)</option>
                                    <option>Sleeper (SL)</option>
                                    <option>Vistadome Non AC (VS)</option>
                                    <option>Second Sitting</option>
                                </select>

                            </div>
                        </div>

                        <div className="flex justify-between mt-5">
                            <div className="flex items-center border border-solid border-slate-700 rounded hover:border-blue-900 ">
                                <i className="fa fa-th-large text-blue-900 px-2" aria-hidden="true">
                                </i>
                                <select type="text"
                                    className=" h-12 w-72 bg-white outline-none text-blue-900"
                                    placeholder="From">
                                    <option value="General">General</option>
                                    <option value="Ladies">LADIES</option>
                                    <option value="Lower Berth/SR.CITIZEN ">LOWER BERTH/SR.CITIZEN</option>
                                    <option value="PERSON WITH DISABILITY">PERSON WITH DISABLITY</option>
                                    <option value="TATKAL">TATKAL</option>
                                    <option value="PREMINUM TATKAL">PREMIUM TATKAL</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex mt-5 mr-3 ">
                            <div className="mr-3">
                                <input type="checkbox" className="h-4" name="" id="" />
                                <span>Person with disability Concession</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Flexible with Date</span>
                            </div>
                        </div>
                        <div className="flex mt-1 mr-3 ">
                            <div className="mr-3">
                                <input type="checkbox" className="h-4" name="" id="" />
                                <span>Train with Available Berth</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>Railway Pass Concession</span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <button
                                className="bg-orange-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-700 duration-700">Search</button>
                        </div>
                    </form>
                </div>

                <div className=" w-[39rem] bg-white mt-1 p-3 h-24">
                    <p className="text-xs font-bold"><span className="text-red-600">New</span> <span className="text-blue-700">IRCTC launches
                        ticket booking on ASK DISHA 2.0 </span> <a href="#"
                            className="bg-green-500 rounded-lg text-white font-medium px-3 py-2 hover:text-blue-800 hover:underline">Try
                            booking in Ask DISHA 2.0</a> </p>
                    <p className="text-xs font-bold text-red-600 mt-4">
                        Tickets booked through unauthorised agents or scripting can be released without refund.
                    </p>
                    <p className="text-xs font-bold text-red-600 mt-4">
                        Please input correct mobile number of passenger for getting timely alerts on booked journey.
                    </p>
                </div>
            </div>
            <div className="w-[39rem] xl:flex flex-col justify-center items-center hidden ">
                <h1 className="text-center text-5xl font-semibold text-white">Indian Railways</h1>
                <div className="flex justify-center items-center text-white mt-2">
                    <h1 className="text-xl mr-3 border-r border-r-solid border-r-white px-2">Safety</h1>
                    <h1 className="text-xl mr-3 border-r border-r-solid border-r-white px-2">Security</h1>
                    <h1 className="text-xl mr-3 border-r border-r-solid border-r-white px-2">Punctuality</h1>
                </div>
            </div>
            {/* Mobile View */}
            <div className=' block md:hidden bg-blue-900 h-16 top-14 w-full mt-[-36px]'>
            </div>
            <div className=' block md:hidden bg-white mt-[-62px] rounded-t-3xl px-4 pt-6'>
                <form action="#" className='flex flex-col mb-5 '>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <i className="fa fa-location-arrow text-blue-900   px-2 ">
                        </i>
                        <input type="text"
                            className=" h-12 w-[91vw] outline-none   text-blue-900  "
                            placeholder="From" />
                    </div>
                    <div className="mt-2 mx-auto mb-2 ">
                        <a href="#"
                            className="bg-blue-50 border border-solid border-bg-blue-50 p-1 rounded-full hover:border-blue-900 focus:border-bg-blue-900"><i
                                className="fa fa-exchange  text-[15px] "></i></a>
                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <i className="fa fa-map-marker text-blue-900   px-2 ">
                        </i>
                        <input type="text"
                            className=" h-12 w-[91vw] outline-none   text-blue-900  "
                            placeholder="To" />
                    </div>
                    <div className=' mt-4 flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900'>
                        <input type="date"
                            className="h-12 w-[91vw] outline-none   text-blue-900"
                            value="05/03/2023" />
                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900 mt-4'>
                        <i className="fa fa-briefcase  px-2 text-blue-900"></i>
                        <select type="text"
                            className=" h-12 w-[91vw] outline-none   text-blue-900 bg-white"
                            placeholder="From">
                            <option>All Classes</option>
                            <option>Anubhuti Class (EA)</option>
                            <option>AC First Class (1A)</option>
                            <option>Vistadome AC (EV)</option>
                            <option>Exec. Chair Car (EC)</option>
                            <option>AC 2 Teir (3A)</option>
                            <option>First Class (FC)</option>
                            <option>AC 3 Teir (3A)</option>
                            <option>Ac 3 Economy (3E)</option>
                            <option>Vistadome Chair Car (VC)</option>
                            <option>AC Chair car (CC)</option>
                            <option>Sleeper (SL)</option>
                            <option>Vistadome Non AC (VS)</option>
                            <option>Second Sitting</option>
                        </select>

                    </div>
                    <div className='flex items-center border hover:outline-1 hover:outline-blue-900 border-solid border-slate-700 rounded hover:border-blue-900 mt-4'>
                        <i className="fa fa-th-large text-blue-900  px-2" aria-hidden="true">
                        </i>
                        <select type="text"
                            className=" h-12 w-[91vw] outline-none   text-blue-900 bg-white"
                            placeholder="From">
                            <option value="General">General</option>
                            <option value="Ladies">LADIES</option>
                            <option value="Lower Berth/SR.CITIZEN ">LOWER BERTH/SR.CITIZEN</option>
                            <option value="PERSON WITH DISABILITY">PERSON WITH DISABLITY</option>
                            <option value="TATKAL">TATKAL</option>
                            <option value="PREMINUM TATKAL">PREMIUM TATKAL</option>
                        </select>
                    </div>
                    <div>
                        <div className="mr-3">
                            <input type="checkbox" className="h-4 mr-1" name="" id="" />
                            <span>Person with disability Concession</span>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-1' />
                            <span>Flexible with Date</span>
                        </div>
                        <div className="mr-3">
                            <input type="checkbox" className="h-4 mr-1" name="" id="" />
                            <span>Train with Available Berth</span>
                        </div>
                        <div>
                            <input type="checkbox" className='mr-1' />
                            <span>Railway Pass Concession</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                            className="bg-orange-600 w-[91vw] text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-orange-700 duration-700">Search</button>
                    </div>

                </form>

                <div className='flex mb-4'>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 w-[18rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/pnr.png" alt="" className="" />
                        <h1 className="mx-auto "><a href="#" className="text-xs font-bold">PNR STATUS</a></h1>
                    </div>
                    <div className='flex items-center bg-blue-900 text-white px-3 py-1 mx-4 w-[20rem]'>
                        <img src="https://www.irctc.co.in/nget/assets/images/icons/chart.png" alt="" className="" />
                        <h1 className="mx-auto"><a href="#" className="text-xs font-bold">CHARTS/VACANCY</a></h1>
                    </div>
                </div>

                <div className=" w-[91vw] bg-white mt-1 p-3 h-40 shadow-2xl ">
                    <p className="text-xs font-bold">
                        <div className='mb-3'>
                            <span className="text-red-600">New</span>
                            <span className="text-blue-700">IRCTC launches
                                ticket booking on ASK DISHA 2.0  </span>
                        </div>

                        <div>

                            <a href="#"
                                className="bg-green-500 rounded-lg text-white font-medium my-3 px-3 py-2 hover:text-blue-800 hover:underline">Try
                                booking in Ask DISHA 2.0</a>
                        </div>
                    </p>
                    <p className="text-xs font-bold text-red-600 mt-4">
                        Tickets booked through unauthorised agents or scripting can be released without refund.
                    </p>
                    <p className="text-xs font-bold text-red-600 mt-4">
                        Please input correct mobile number of passenger for getting timely alerts on booked journey.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Section