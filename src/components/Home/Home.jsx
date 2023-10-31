const Home = () => {
    return (
        <div className="m-5">
            {/* banner as News*/}
            <div>
                <section className="px-5 py-15  dark:bg-gray-800 dark:text-gray-100">
                    <div className="container items-center justify-center grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                        <div className="flex flex-col  justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                            <div className="flex flex-col space-y-8 md:space-y-12">
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracki uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                                    <p className="text-xs dark:text-gray-400">47 minutes ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracki uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
                                    <p className="text-xs dark:text-gray-400">2 hours ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <h3 className="flex items-center space-x-2 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                                        <span className="text-xs font-bold tracki uppercase">Exclusive</span>
                                    </h3>
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
                                    <p className="text-xs dark:text-gray-400">4 hours ago by
                                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full space-y-2">
                                <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                                    <div className="w-1/2 h-full dark:bg-violet-400"></div>
                                </div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                    <span className="text-xs font-bold tracki uppercase">See more exclusives</span>
                                    <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" >
                            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                                        <div className="space-y-2">
                                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                                            <p className="text-xs dark:text-gray-400">By
                                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> Elara Mustarin</a>
                                            </p>
                                        </div>
                                        <div className="dark:text-gray-100">
                                            <p>Insert the actual text content here...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
                                <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
                                <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
                            </div>
                            <div className="flex flex-col divide-y divide-gray-700">
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex px-1 py-4">
                                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                                    <div className="flex flex-col flex-grow">
                                        <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
                                        <p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
                                            <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section>
                <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                        <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </div>
                </section>
            </section>

            <section className="mx-auto">
                <div>
                    <section>
                        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                            <header className="text-center">
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    New Collection
                                </h2>

                                <p className="max-w-md mx-auto mt-4 text-gray-500">
                                    Grab them before it goes stock out
                                </p>
                            </header>

                            <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                                <li>
                                    <a href="#" className="relative block group">
                                        <img
                                            src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                            alt=""
                                            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                        />

                                        <div
                                            className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                        >
                                            <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                            <span
                                                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                            >
                                                Shop Now
                                            </span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="relative block group">
                                        <img
                                            src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                            alt=""
                                            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                        />

                                        <div
                                            className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                        >
                                            <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                            <span
                                                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                            >
                                                Shop Now
                                            </span>
                                        </div>
                                    </a>
                                </li>

                                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                                    <a href="#" className="relative block group">
                                        <img
                                            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                            alt=""
                                            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                        />

                                        <div
                                            className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                        >
                                            <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                            <span
                                                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                            >
                                                Shop Now
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

            </section>

            <section>
                <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <ul className="divide-y divide-gray-100 py-2 px-4">
                        <li className="flex py-4">
                            <div className="mr-4 flex-1">
                                <h4 className="text-lg font-medium text-gray-900">The Bank of England Risks Hiking Too Far Ahead</h4>
                                <div className="mt-1 text-sm text-gray-400"><span>Business</span> • <time>18 Nov 2022</time></div>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" className="h-20 w-20 rounded-lg object-cover" alt="" />
                            </div>
                        </li>
                        <li className="flex py-4">
                            <div className="mr-4 flex-1">
                                <h4 className="text-lg font-medium text-gray-900">The Bank of England Risks Hiking Too Far Ahead</h4>
                                <div className="mt-1 text-sm text-gray-400"><span>Business</span> • <time>18 Nov 2022</time></div>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="h-20 w-20 rounded-lg object-cover" alt="" />
                            </div>
                        </li>
                        <li className="flex py-4">
                            <div className="mr-4 flex-1">
                                <h4 className="text-lg font-medium text-gray-900">The Bank of England Risks Hiking Too Far Ahead</h4>
                                <div className="mt-1 text-sm text-gray-400"><span>Business</span> • <time>18 Nov 2022</time></div>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1587614380862-0294308ae58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-20 w-20 rounded-lg object-cover" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>

            </section>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <section className="py-6 dark:bg-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                            <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                        </div>
                    </div>
                </section>
            </section>
            {/* stats */}
            <div>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                            <p className="text-sm sm:text-base">Clients</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
                            <p className="text-sm sm:text-base">Followers on social media</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
                            <p className="text-sm sm:text-base">Published books</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
                            <p className="text-sm sm:text-base">TED talks</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
                            <p className="text-sm sm:text-base">Years of experience</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                            <p className="text-sm sm:text-base">Workshops</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;