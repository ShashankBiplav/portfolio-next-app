import Head from 'next/head';
import React, {useState} from 'react';

export default function Home() {
  const [navOpen, isNavOpen] = useState(false);
  const toggleNavigation = () => {
    isNavOpen(!navOpen);
  };
  const menuIcon = <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
    <path fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"/>
  </svg>;
  const closeMenuIcon = <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
    <path fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
  </svg>;
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Shashank Biplav</title>
        <meta name="author" content="Shashank Biplav"/>
        <meta name="keywords" content="Shashank Biplav, Portfolio, Full-Stack Developer"/>
        <link rel="shortcut icon" href={"/sb.jpg"}/>
        <meta name="theme-color" content="#9CA3AF"/>
      </Head>
      <body
        className="text-black transition-colors duration-1000 bg-gray-400 dark:text-white dark:bg-blue-gray-primary">
      <section className="text-gray-700">
        <div className="container px-5 mx-auto lg:py-5 xl:px-0">
          
          <div
            className="w-full mt-4 mb-4 text-black bg-gray-100 shadow-xl lg:mb-8 dark:text-white rounded-xl dark:bg-gray-900">
            <div
              className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <a href="/"
                   className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                  <h1
                    className="text-2xl font-bold tracking-tighter text-gray-500 uppercase dark:text-white md:text-sm lg:text-3xl">
                    Shashank Biplav
                  </h1>
                </a>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline transition"
                        onClick={toggleNavigation}>{navOpen? closeMenuIcon :menuIcon}
                </button>
              </div>
              <nav className= "flex flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href={"/blog"}>Blog</a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href={"/projects"}>Projects</a>
              </nav>
              {navOpen?<nav className="sm:hidden md:block flex flex-col">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href={"/blog"}>Blog</a>
                <a
                  className="px-4 py-2 mb-4 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href={"/projects"}>Projects</a>
              </nav> : <></>}
            </div>
          </div>
          
          <div className="flex-1 mx-auto ">
            <div className="grid gap-4 grid-col-1 lg:grid-col-6 lg:gap-8">
              <div className="col-start-1 row-span-2 lg:col-span-1 col-span-full">
                <div
                  className="flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 xl:py-5 xl:px-10 ">
                  <div className="hidden w-full lg:block">
                    <img alt="gallery"
                         className="inset-0 block object-cover object-center w-full h-full rounded-xl "
                         src={"/shashank-biplav.jpg"}/>
                  </div>
                  <div className="w-full py-2 text-left xl:py-6">
                    <h1
                      className="mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500">
                      Shashank Biplav</h1>
                    <p className="text-sm leading-relaxed text-gray-400">Software Engineer &amp; Technology Blogger
                    </p>
                    <p className="mt-4 leading-relaxed tracking-tighter text-md dark:text-gray-100">
                      Hello, I am Shashank Biplav a Full-Stack developer based in India specializing in building apps
                      for Mobile and the Web.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-2 col-span-full lg:col-span-4 ">
                <div
                  className="flex flex-wrap h-full px-2 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 xl:py-10 xl:px-10 ">
                  <div className="hidden xl:w-1/3 xl:block">
                    <img alt="gallery"
                         className="inset-0 block object-cover object-center w-full h-full rounded-xl"
                         src={"/react-dockerized.png"}/>
                  </div>
                  <div className="w-full p-6 text-left xl:w-2/3">
                    <h1
                      className="mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500">
                      Dockerizing a React App</h1>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Latest Article, Featured on <span className="font-bold">daily.dev</span>
                    </p>
                    <p className="text-xs leading-relaxed text-gray-400">
                      Feb 11, 2021
                    </p>
                    <p className="mt-12 leading-relaxed tracking-tighter text-md dark:text-gray-100">
                      Have you ever wondered, the dockerized React app that we use in development is not the same that
                      is deployed in production? There is an extra build step required! But wait, isn't that the primary
                      purpose of containerization, i.e, to have the same environment and same code in the development
                      and production. This extra build step beats the whole idea of the same environment and same code.
                      Well, let's have a look further.
                    </p>
                    <button
                      className="px-4 py-2 mt-12 text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4">
                      <a href="https://shashankbiplav.me/dockerizing-a-react-app-introduction-to-multi-stage-builds"
                         target="_blank" rel="noopener noreferrer"
                         className="flex items-center font-semibold leading-relaxed tracking-tighter text-md focus:outline-none">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20"
                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <line x1="15" y1="16" x2="19" y2="12"/>
                          <line x1="15" y1="8" x2="19" y2="12"/>
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-end-7 col-span-full lg:col-span-1 ">
                <div
                  className="flex flex-wrap h-full p-8 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 sm:py-5 xl:px-10 ">
                  <div className="w-full mt-6 text-left ">
                    <h1
                      className="mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500">
                      Intelli-Park</h1>
                    <p className="text-sm leading-relaxed text-gray-400">Latest Project
                    </p>
                    <p className="text-xs leading-relaxed text-gray-400"> Since 2020
                    </p>
                    <p
                      className="mt-8 font-normal leading-relaxed tracking-tighter text-gray-900 text-md xl:mt-12 dark:text-gray-100">
                      Managing parking lots intelligently!
                    </p>
                    <p
                      className="mt-4 text-sm leading-relaxed tracking-tighter text-gray-500 dark:text-gray-100">
                      Converting boring parking lots into intelligent ones using modern technologies. Parking and
                      tracking vehicle status now is a breeze.
                    </p>
                    <button
                      className="px-4 py-2 mt-6 text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl">
                      <a href="https://github.com/ShashankBiplav/Intelli-Park" target="_blank" rel="noopener noreferrer"
                         className="flex items-center font-semibold leading-relaxed tracking-tighter text-md focus:outline-none">
                        See Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20"
                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <line x1="15" y1="16" x2="19" y2="12"/>
                          <line x1="15" y1="8" x2="19" y2="12"/>
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-2 col-span-full lg:col-span-2">
                <div
                  className="flex flex-wrap items-center w-full h-full p-6 mx-auto bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 ">
                  <div className="flex flex-wrap justify-start mx-auto text-center ">
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"https://github.com/ShashankBiplav"} target="_blank" rel="noopener noreferrer"
                           className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                  d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"https://www.linkedin.com/in/shashank-biplav-9346871b5/"} target="_blank"
                           rel="noopener noreferrer" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 32 32" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M32 31.292V19.46c0-6.34-3.384-9.29-7.896-9.29-3.641 0-5.273 2.003-6.182 3.409v-2.924h-6.86c.091 1.937 0 20.637 0 20.637h6.86V19.767c0-.615.044-1.232.226-1.672.495-1.233 1.624-2.509 3.518-2.509 2.483 0 3.475 1.892 3.475 4.666v11.041H32v-.001zM3.835 7.838c2.391 0 3.882-1.586 3.882-3.567C7.673 2.247 6.227.707 3.881.707S0 2.246 0 4.271c0 1.981 1.489 3.567 3.792 3.567h.043zm3.43 23.454V10.655H.406v20.637h6.859z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"mailto:biplavshashank7@gmail.com?subject=Important!&body=Hi,"} target="_blank"
                           rel="noopener noreferrer" className="focus:outline-none">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                  fill="currentColor"/>
                          </svg>
                        
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"https://twitter.com/biplav_shashank"} target="_blank" rel="noopener noreferrer"
                           className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                  d="M15.725 2.76a.955.955 0 0 0-.17-.146c.016-.05.03-.1.043-.148.1-.4-.07-.81-.408-1.049a1.025 1.025 0 0 0-1.146-.007c-.136.091-.587.294-.965.426C12.365 1.268 11.611 1 10.742 1c-.75 0-1.43.213-2.207.69-1.082.667-1.511 1.885-1.594 2.958a7.11 7.11 0 0 1-4.23-2.622 1.001 1.001 0 0 0-1.669.114C.429 3.232.417 4.348.698 5.297a1 1 0 0 0-.394.795c0 1.111.434 2.036 1.017 2.73a1 1 0 0 0-.022.836 4.816 4.816 0 0 0 1.557 1.968 4.93 4.93 0 0 1-1.734.12.982.982 0 0 0-1.069.67 1 1 0 0 0 .438 1.182C2.084 14.54 3.742 15 5.56 15h.007c2.438-.002 4.74-1.073 6.483-3.015 1.658-1.847 2.602-4.311 2.536-6.557.447-.39.945-.93 1.275-1.48a.992.992 0 0 0-.137-1.188zm-5.163 7.89C9.203 12.164 7.43 12.998 5.567 13a6.88 6.88 0 0 1-.689-.028A5.18 5.18 0 0 0 5.95 12.2a1 1 0 0 0-.664-1.726 2.12 2.12 0 0 1-1.053-.33c.06-.04.117-.085.174-.135.294-.263.417-.671.298-1.047a.986.986 0 0 0-.827-.69c-.098-.021-.491-.199-.86-.554l.017-.003a1 1 0 0 0 .315-1.831c-.204-.125-.555-.55-.728-1.113 1.166.938 2.917 1.883 5.325 2.016a.998.998 0 0 0 1.03-1.224c-.107-.462-.085-1.743.607-2.17.455-.279.79-.393 1.158-.393.43 0 .826.11 1.37.65.08.079.17.143.27.19a1 1 0 0 0 .274.695.997.997 0 0 0-.096.544c.198 1.842-.567 3.977-1.998 5.571z"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"https://www.instagram.com/shashankbiplav/"} target="_blank" rel="noopener noreferrer"
                           className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                                  fill="currentColor"/>
                            <path
                              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                              fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href={"https://dribbble.com/shashankbiplav"} target="_blank" rel="noopener noreferrer"
                           className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row-span-2 lg:col-end-7 col-span-full lg:col-span-3 ">
                <div
                  className="flex flex-wrap w-full h-full bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 ">
                  <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mt-10">
                      <div className="w-2/3 px-6 text-left">
                        <h1 className="font-sans text-2xl font-black tracking-tighter text-cyan-500">
                          Projects.
                        </h1>
                        <p className="text-sm leading-relaxed text-gray-400">
                          2019 - 2021
                        </p>
                      </div>
                    </div>
                    <div className="px-4 py-2 xl:w-2/4 md:w-full">
                      <a href="https://play.google.com/store/apps/details?id=com.certainbits.bakeology" target="_blank"
                         rel="noopener noreferrer">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 bg-white shadow-2xl rounded-xl"
                               src={"/bake.jpg"}
                               alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                            <span className="font-bold text-black uppercase dark:text-gray-100">BakeOlogy, </span>Recipe
                            Sharing App
                          </figcaption>
                        </div>
                      </a>
                    </div>
                    <div className="px-4 py-2 xl:w-2/4 md:w-full">
                      <a href="https://github.com/ShashankBiplav/pro-dox" target="_blank" rel="noopener noreferrer">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 shadow-2xl rounded-xl "
                               src={"/pd.jpg"} alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                                                    <span
                                                      className="font-bold text-black uppercase dark:text-gray-100">Pro-Dox, </span> Rich
                            Text Editor
                          </figcaption>
                        </div>
                      </a>
                    </div>
                    <div className="px-4 py-2 xl:w-4/4 md:w-2/2">
                      <a
                        href="https://shashankbiplav.me/intelli-park-parking-made-intelligent-my-vercelhashnode-project"
                        target="_blank" rel="noopener noreferrer">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 shadow-2xl rounded-xl"
                               src={"/ip.jpg"} alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                                                    <span
                                                      className="font-bold text-black uppercase dark:text-gray-100">Intelli-Park,
                                                    </span>Intelligent Parking System
                          </figcaption>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1 col-span-full lg:col-span-3">
                <div className="flex flex-wrap items-center w-full mx-auto mt-auto shadow-xl rounded-xl">
                  <div className="flex flex-col items-center rounded-xl">
                    <div className="flex h-full overflow-hidden swiper rounded-xl">
                      <img className="w-full bg-white dark:bg-gray-900 rounded-xl"
                           src={"/mern.png"} id="slide1" alt="mern-shashank-biplav"/>
                      <img className="w-full bg-white dark:bg-gray-900 rounded-xl"
                           src={"/flutter.png"} id="slide2" alt="flutter-shashank-biplav"/>
                      <img className="w-full bg-white dark:bg-gray-900 rounded-xl "
                           src={"/aws.png"} id="slide3" alt="aws-shashank-biplav"/>
                    </div>
                    <div className="flex ">
                      <a href={"#slide1"}
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"/>
                      <a href={"#slide2"}
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"/>
                      <a href={"#slide3"}
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1 col-span-full lg:col-span-6 ">
                <div
                  className="flex flex-wrap w-full h-full px-6 py-10 mb-4 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-900 sm:py-24 lg:px-6 ">
                  <div className="w-full mx-auto text-center xl:w-1/2">
                    <h1
                      className="mt-auto mb-2 font-sans text-3xl font-black tracking-tighter xl:text-6xl lg:text-4xl text-cyan-500">
                      Shashank Biplav</h1>
                    <p className="mb-10 text-lg leading-relaxed text-gray-400"> Software Engineer &amp; Technology
                      Blogger
                    </p>
                    <span className="flex-wrap mt-8 text-sm font-bold text-gray-400 md:ml-4 lg:ml-auto license-text">
                      <p>Developer by day and Blogger by night.</p>
          </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </body>
    </>
  )
}
