import React from 'react'

const Contact = () => {
    return (
        <div className='hidden md:block mt-[-39px]'>
            <div className="flex justify-center items-center bg-purple-900 py-5 mb-1">
                <div className=" mr-5">
                    <h1 className="text-white">Get Connected with us on social networks</h1>
                </div>
                <ul className="md:text-lg xl:text-3xl flex justify-center items-center ">
                    <li className="mx-1">
                        <a href="" className=" bg-blue-700 py-3 px-5 rounded-full">
                            <span className="fa fa-facebook text-white"></span>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-red-600 py-3 px-4 rounded-full">
                            <span className="fa fa-youtube text-white"></span>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-sky-900 py-3 px-4 rounded-full">
                            <span className="fa fa-instagram text-white"></span>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-blue-800 py-3 px-4 rounded-full">
                            <i className="fa fa-linkedin text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-sky-600 py-3 px-3 rounded-full">
                            <i className="fa fa-telegram text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-red-700 py-3 px-4 rounded-full">
                            <i className="fa fa-pinterest text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-sky-900 py-3 px-5 rounded-full">
                            <i className="fa fa-tumblr text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="mx-1">
                        <a href="" className=" bg-sky-600 py-3 px-4 rounded-full">
                            <i className="fa fa-twitter text-white" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact