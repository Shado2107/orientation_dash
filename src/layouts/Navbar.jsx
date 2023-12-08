
const Navbar = () => {
    return (
       <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none ">
            <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flx items-center gap-2 sm:gap-4 lg:hidden">
                    <a className="block flex-shrink-0 lg:hidden">
                        <img src="" alt="logo"/>
                    </a>
                </div>

                <div className="felx items-center gap-3 2xsm:ga-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <li>

                        </li>
                        <div className="relative" >
                            <a className="flex items-center gap-4" href="#">
                                <span className="hidden text-right lg:block">
                                    <span className="block text-sm font-medium"></span>
                                </span>
                                <span className="h-12 w-12 rounded-full overflow-hidden">
                                    <img src="#" alt="user"/>
                                </span>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
       </header>
    );
};

export {Navbar};