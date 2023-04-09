import React from 'react'
import Icon from '@mdi/react';

import { mdiFood,mdiBus, mdiBeach,mdiTrainVariant,mdiImageFilterHdr } from '@mdi/js';
const Services = () => {
    return (
        <div className="hidden md:flex flex-col justify-center items-center xl:mx-40 mt-4 ">
            <div className="flex  flex-col">
                <h1 className="font-semibold text-3xl ">Have you not found the right one?</h1>
                <h1 className="font-semibold text-3xl ">Find a service suitable for you here.</h1>
            </div>
            <div className=" grid md:grid-cols-4 xl:grid-cols-5 gap-x-20 gap-y-5 mt-7 items-center ">
                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900">
                        <a href=""><i className="bi bi-airplane   hover:text-white" aria-hidden="true"></i></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">HOTELS</h1>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900">
                        <a href=""><i className="bi bi-shop hover:text-white"></i></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">HOTELS</h1>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900">
                        <a href=""><i className="bi bi-graph-up-arrow hover:text-white"></i></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">RAIL DIRSHTI</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""> <Icon path={mdiFood} size={2} /></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">E-CATERING</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><Icon path={mdiBus} size={2} /></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">BUS</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><Icon path={mdiBeach} size={2} /></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1 w-48">HOLIDAYS PACKAGES</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><Icon path={mdiTrainVariant} size={2} /></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1 text-center">TOURIST TRAINS</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><Icon path={mdiImageFilterHdr} size={2} /></a>
                    </span>
                    <h1 className="text-lg font-semibold mt-1">HILL RAILWAYS</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><i className="bi bi-train-lightrail-front"></i></a>
                    </span>
                    <h1 className="text-sm font-semibold mt-1">CHARTER TRAIN</h1>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <span
                        className="text-5xl border-[2px] border-solid border-black p-5 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white">
                        <a href=""><i className="bi bi-images"></i></a>
                    </span>
                    <h1 className="text-base font-semibold mt-1">GALLERY</h1>
                </div>
            </div>
        </div>
    )
}

export default Services