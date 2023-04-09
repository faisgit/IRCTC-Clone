import React from 'react'

const Cards = () => {
  return (
    <div className=" hidden md:flex flex-col justify-center items-center mt-7  mb-10 bg-slate-200 px-24 py-10    ">
    <div>
      <h1 className="text-3xl font-semibold mb-5">HOLIDAYS</h1>
    </div>
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div className="flex ">
        <div className="block max-w-sm rounded-lg bg-white shadow-xl w-96">
          <a href="#!">
            <img className="rounded-t-lg w-96" src="https://www.irctc.co.in/nget/assets/images/exterior.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black">
              Maharajas' Express
            </h5>
            <p className="mb-4 text-sm text-black ">
              Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone
              stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are
              amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by
              World Travel Awards consecutively for last six years.
            </p>
            <button type="button"
              className=" bg-blue-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Read more
            </button>
          </div>
        </div>
      </div>


      <div className="flex ">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg w-96 ">
          <a href="#!">
            <img className="rounded-t-lg w-96" src="https://www.irctc.co.in/nget/assets/images/Thailand.jpg"  alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black">
              International Packages
            </h5>
            <p className="mb-4 text-sm text-black">
              Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong
              Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of
              sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable
              experience.
            </p>
            <button type="button"
              className=" bg-blue-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg w-96 ">
          <a href="#!">
            <img className="rounded-t-lg w-96" src="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black">
              Domestic Air Packages
            </h5>
            <p className="mb-4 text-sm  text-black">
              Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure
              traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh,
              Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
            </p>
            <button type="button"
              className="bg-blue-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Read More
            </button>
          </div>
        </div>
      </div>



      <div className="flex ">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg w-96 ">
          <a href="#!">
            <img className="rounded-t-lg w-96" src="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black">
              Bharat Gaurav Tourist Train
            </h5>
            <p className="mb-4 text-sm  text-black">
              IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to
              promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and
              heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural
              heritage.
            </p>
            <button type="button"
              className=" bg-blue-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Read More
            </button>
          </div>
        </div>
      </div>


      <div className="flex ">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg w-96 ">
          <a href="#!">
            <img className="rounded-t-lg w-96" src="https://www.irctc.co.in/nget/assets/images/Manali.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black">
              Rail Tour Packages
            </h5>
            <p className="mb-4 text-sm  text-black">
              IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for
              enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno
              Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are
              also available.
            </p>
            <button type="button"
              className=" bg-blue-500 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init data-te-ripple-color="light">
              Read More
            </button>
          </div>
        </div>
      </div>


    </div>
  </div>

  )
}

export default Cards