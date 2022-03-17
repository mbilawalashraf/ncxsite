import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/product')
    }

    return (
        <>
            <Head>
                <title>Price List</title>
                <meta name="description" content="NCX" />
                <link rel="icon" href="/ncx.ico" />
            </Head>
            {/* Nav Section */}
            <nav className="bg-white shadow-lg main-nav">
                <div className="max-w-7xl mx-auto px-4">
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
                                    className="py-2 px-5 font-medium text-white bg-blue-500"
                                    >Sign In</a
                                >
                            </div>
                    </div>
                </div>
            </nav>
            {/* End Nav Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row lg:w-1/2">
                            <div className="max-w-lg">
                                <h1 className="hero-title">Global WEB 3.0<br />Cryptocurrency Exchange</h1>
                                <p className="mt-0 hero-content">Buy, Sell & Trade over 100+ cryptocurrencies on NCX<br />Fast, Safe & Secure </p>
                                <div className="grid grid-cols-4 store-logo">
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className=""
                                            src="/appstore.svg" alt="Mock Up Data" />
                                            
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className=""
                                            src="/googleplay.svg" alt="Mock Up Data" />
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a href="#"
                                        className="block px-10 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Trade Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.svg" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h1>Home Page</h1>
                <Link href='/blog'>
                    <a>Blog</a>    
                </Link>
                <Link href='/product'>
                    <a>Products</a>    
                </Link>
                <button onClick={handleClick}>
                    Place Order    
                </button>
                <Link href='/user'>
                    <a>Users</a>    
                </Link>
                <Link href='/posts'>
                    <a>Posts</a>
                </Link>
            </div> */}
        </>
    )
}

export default Home