function Nav() {
    return (
        <nav className="bg-white shadow-lg main-nav">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* <!-- Website Logo --> */}
                                <a href="#" className="flex items-center py-6 px-2">
                                    <img src="/NCXlogo.svg" className="mr-3 h-6 sm:h-8" alt="NCX Logo" />
                                </a>
                            </div>
                            <div className="vertical-line"></div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1 primary-nav">
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >Buy Crypto</a
                                >
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >Exchange</a
                                >
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >NCX Card</a
                                >
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >About</a
                                >
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >Blog/News</a
                                >
                                <a
                                    href=""
                                    className="py-4 px-5"
                                    >Security</a
                                >
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-6 secondary-nav">
                                <a
                                    href=""
                                    className="py-2 px-5 border-2 border-black"
                                    >Sign Up</a
                                >
                                <a
                                    href=""
                                    className="py-2 px-5 font-medium text-white bg-blue-500 border-2 border-blue-500"
                                    >Sign In</a
                                >
                            </div>
                    </div>
                </div>
            </nav>
    )
}

export default Nav