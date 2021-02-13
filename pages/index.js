import Head from 'next/head'

export default function Home() {
  return ( // TODO: Dark mode ka code nahi likha hua hai.. likh lena bhaii.. original se compare karke
    <div>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Shashank Biplav</title>
        <meta name="author" content="Shashank Biplav"/>
        <meta name="keywords" content="Shashank Biplav, Portfolio, Full-Stack Developer"/>
        <meta name="theme-color" content="#9CA3AF"/>
      </head>
      <body className="text-black transition-colors duration-1000 bg-gray-400 dark:text-white dark:bg-blue-gray-primary">
      <section className="text-gray-700">
        <div className="container px-5 mx-auto lg:py-5 xl:px-0">
          
          <div
            className="w-full mt-4 mb-4 text-black bg-gray-100 shadow-xl lg:mb-8 dark:text-white rounded-xl dark:bg-gray-900">
            <div x-data="{ open: false }"
                 className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <a href="/"
                   className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                  <h1
                    className="text-2xl font-bold tracking-tighter text-gray-500 uppercase dark:text-white md:text-sm lg:text-3xl">
                    ShashankBiplav
                    <span className="text-xs">©</span>
                  </h1>
                </a>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"/>
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                  </svg>
                </button>
              </div>
              <nav className="{'flex': open, 'hidden': !open}"
                   className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/">Blog</a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/">Work</a>
              </nav>
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
                         src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.0-9/127144664_3417481055015903_2840816828621070379_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=3comy_Byi_0AX-_-dfi&_nc_ht=scontent.fgau1-1.fna&oh=b38a94b998f1e813d32551ac3f56ca5a&oe=604D3D60"/>
                  </div>
                  <div className="w-full py-2 text-left xl:py-6">
                    <h1
                      className="mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500">
                      Shashank Biplav</h1>
                    <p className="text-sm leading-relaxed text-gray-400">Software Engineer &amp; Technology Blogger
                    </p>
                    <p className="mt-4 leading-relaxed tracking-tighter text-md dark:text-gray-100">
                      Hello, I am Shashank Biplav a Full-Stack developer based in India specializing in building apps for Mobile and the Web.
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
                         src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"/>
                  </div>
                  <div className="w-full p-6 text-left xl:w-2/3">
                    <h1
                      className="mt-auto mb-2 font-sans text-2xl font-black tracking-tighter text-cyan-500">
                      Dockerizing a React App</h1>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Latest Article
                    </p>
                    <p className="text-xs leading-relaxed text-gray-400">
                      Feb 11, 2021
                    </p>
                    <p className="mt-12 leading-relaxed tracking-tighter text-md dark:text-gray-100">
                      Have you ever wondered, the dockerized React app that we use in development is not the same that is deployed in production? There is an extra build step required! But wait, isn't that the primary purpose of containerization, i.e, to have the same e...
                    </p>
                    <button
                      className="px-4 py-2 mt-12 text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl xl:mt-4">
                      <a href=""
                         className="flex items-center font-semibold leading-relaxed tracking-tighter text-md focus:outline-none">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
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
                    <p className="text-xs leading-relaxed text-gray-400"> Since 2019
                    </p>
                    <p
                      className="mt-8 font-normal leading-relaxed tracking-tighter text-gray-900 text-md xl:mt-12 dark:text-gray-100">
                      Managing parking lots intelligently!
                    </p>
                    <p
                      className="mt-4 text-sm leading-relaxed tracking-tighter text-gray-500 dark:text-gray-100">
                      Converting boring parking lots into intelligent ones using modern tech. Parking and tracking vehicle status now is a breeze.
                    </p>
                    <button
                      className="px-4 py-2 mt-6 text-gray-900 transition duration-500 ease-in-out transform bg-gray-100 border-2 shadow-2xl focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none dark:bg-gray-900 hover:bg-white dark:hover:bg-white border-cyan-400 hover:border-white dark:text-gray-100 dark:hover:text-gray-900 hover:text-gray-900 rounded-xl">
                      <a href="http://colorsandfonts.com/" target="_blank"
                         className="flex items-center font-semibold leading-relaxed tracking-tighter text-md focus:outline-none">
                        See Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20"
                             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
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
                        <a href="#" className="focus:outline-none">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                                  fill="currentColor"/>
                          </svg>
                        
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href="#" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href="#" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href="#" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8H15.5C17.1569 8 18.5 6.65685 18.5 5C18.5 3.34315 17.1569 2 15.5 2H8.5Z"
                              fill="currentColor"/>
                            <path
                              d="M15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9Z"
                              fill="currentColor"/>
                            <path
                              d="M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z"
                              fill="currentColor"/>
                            <path
                              d="M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z"
                              fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href="#" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                                  fill="currentColor"/>
                            <path
                              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                              fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                  fill="currentColor"/>
                          </svg>
                        </a>
                      </button>
                    </div>
                    <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
                      <button
                        className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform bg-gray-100 border-2 shadow-xl rounded-xl hover:text-cyan-500 dark:bg-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
                        <a href="#" className="focus:outline-none">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21L12 9L6 9L6 15L12 21Z" fill="currentColor"
                                  fill-opacity="0.5"/>
                            <path d="M18 9V3H6L12 9H6V15H18L12 9H18Z" fill="currentColor"/>
                          </svg>
                        </a></button>
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
                      <a href="http://unicornsfeed.com/">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 bg-white shadow-2xl rounded-xl"
                               src="https://res.cloudinary.com/the-unicorns-feed/image/upload/v1603868944/tuf%20assets/3_bhhmng.png"
                               alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                            <span className="font-bold text-black uppercase dark:text-gray-100">Intelli-Park,
                            </span>Management Software
                          </figcaption>
                        </div>
                      </a>
                    </div>
                    <div className="px-4 py-2 xl:w-2/4 md:w-full">
                      <a href="http://colorsandfonts.com/">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 shadow-2xl rounded-xl "
                               src="./assets/caf.svg" alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                                                    <span
                                                      className="font-bold text-black uppercase dark:text-gray-100">Pro-Dox, </span> Rich Text Editor
                          </figcaption>
                        </div>
                      </a>
                    </div>
                    <div className="px-4 py-2 xl:w-4/4 md:w-2/2">
                      <a href="http://wickedtemplates.com/">
                        <div className="px-4 rounded-2xl">
                          <img className="object-cover object-center w-full h-40 shadow-2xl rounded-xl "
                               src="./assets/wt.svg" alt="content"/>
                        </div>
                        <div className="px-4 ">
                          <figcaption
                            className="mt-2 ml-2 text-xs tracking-tighter dark:text-gray-400">
                                                    <span
                                                      className="font-bold text-black uppercase dark:text-gray-100">Bake-O-Logy,
                                                    </span> Recipe Sharing App
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
                           src="./assets/image1slider.svg" id="slide1"/>
                      <img className="w-full bg-white dark:bg-gray-900 rounded-xl"
                           src="./assets/image2slider.svg" id="slide2"/>
                      <img className="w-full bg-white dark:bg-gray-900 rounded-xl "
                           src="./assets/image3slider.svg" id="slide3"/>
                    </div>
                    <div className="flex ">
                      <a href="/"
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"></a>
                      <a href="/"
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"></a>
                      <a href="/"
                         className="w-10 h-1 mx-1 -mt-4 bg-gray-900 border-2 rounded-full border-cyan-500"></a>
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
                    <p className="mb-10 text-lg leading-relaxed text-gray-400"> Software Engineer &amp; Technology Blogger
                    </p>
                    <span className="flex-wrap mt-8 text-sm font-bold text-gray-400 md:ml-4 lg:ml-auto"
                          className="license-text">
                      Developer by day and Blogger by night.
          </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </body>
    </div>
  )
}
