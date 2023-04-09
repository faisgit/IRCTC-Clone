import React from 'react'

const Footer = () => {
    return (
        < >
            <div className="bg-blue-900 hidden md:block">
                <ul className="mx-40 grid grid-cols-4 gap-x-10 gap-y-5 py-10 text-white  ">
                    <li className="text-sm font-bold cursor-pointer">IRCTC Trains</li>
                    <li className="text-sm font-bold cursor-pointer">General Information</li>
                    <li className="text-sm font-bold cursor-pointer">Important Information</li>
                    <li className="text-sm font-bold cursor-pointer">Agents</li>
                    <li className="text-sm font-bold cursor-pointer">Enquiries</li>
                    <li className="text-sm font-bold cursor-pointer">How To</li>
                    <li className="text-sm font-bold cursor-pointer">IRCTC Official App</li>
                    <li className="text-sm font-bold cursor-pointer">Advertise with us</li>
                    <li className="text-sm font-bold cursor-pointer">Refund Rules</li>
                    <li className="text-sm font-bold cursor-pointer">Person With Disability Facilities</li>
                    <li className="text-sm font-bold cursor-pointer">IRCTC eWallet</li>
                    <li className="text-sm font-bold cursor-pointer">IRCTC Loyalty Program</li>
                    <li className="text-sm font-bold cursor-pointer">IRCTC-iPAY Payment Gateway</li>
                    <li className="text-sm font-bold cursor-pointer">IRCTC Zone</li>
                    <li className="text-sm font-bold cursor-pointer">For Newly Migrated Agents</li>
                    <li className="text-sm font-bold cursor-pointer">Mobile Zone</li>
                    <li className="text-sm font-bold cursor-pointer">Policies</li>
                    <li className="text-sm font-bold cursor-pointer">Ask Disha ChatBot</li>
                    <li className="text-sm font-bold cursor-pointer"></li>
                    <li className="text-sm font-bold cursor-pointer">About us</li>
                </ul>
            </div>

            <div className="mx-20 xl:flex justify-between mb-5 hidden ">
                <Image src='/security.png' className="w-[48rem]" alt="error" />
                    <div>
                        <h1 className="text-sm">Copyright Â© 2023 - www.irctc.co.in. All Rights Reserved</h1>
                        <h1 className="text-sm">Designed and Hosted by <a href="#" className="text-blue-500 hover:underline">CRIS Compatible Browsers</a></h1>
                    </div>
            </div>

        </>
    )
}

export default Footer