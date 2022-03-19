import Head from 'next/head';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';

import Footer from '../components/Footer';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

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
            <Nav />
            {/* End Nav Section */}
            {/* Hero Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg">
                                <h1 className="hero-title">Global WEB 3.0<br />Cryptocurrency Exchange</h1>
                                <p className="mt-0 hero-content">Buy, Sell  Trade over 100+ cryptocurrencies on NCX<br />Fast, Safe & Secure </p>
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
                                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Trade Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            {/* Hero Section 2 */}
            <div className="bg-white lg:h-full lg:py-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">

                        <div className="flex items-center justify-center w-full h-96 mockup_parent2">
                            <img className="object-cover w-full h-full rounded-md mockup-pic2"
                                src="/mockup2.png" alt="Mock Up Data" />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row lg:w-1/2 ml-14 ">
                            <div className="max-w-lg">
                                <h1 className="hero-title2">Fast Deposit &<br />Withdrawals</h1>
                                <p className="mt-0 hero-content2">From Visa & Mastercard to instant SEPA<br />deposits, youve got options for getting the<br />funds you need, when you need them.</p>
                                <div className="grid grid-cols-4 store-logo2 py-4">
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className=""
                                            src="/visa.svg" alt="Mock Up Data" />
                                            
                                        </a>
                                    </div>
                                </div>
                                <div style={{marginTop: 4.5 + 'rem'}}>
                                    <a href="#"
                                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 2 */}
            {/* Hero Section 3 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="mockup3header">
                    <div className="container flex px-6 py-32 mx-auto mockup3_container">
                        <div className="flex flex-col w-full lg:flex-row mockup3_firstsection">
                            <div className="max-w-lg">
                                <h1 className="hero-title3">Your Security.<br />Our Priority.</h1>
                                <p className="mt-0 hero-content3">SSL Encryption<br />Two-step Verification<br />Security  Penetration Tests<br />Instant KYC</p>
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
                                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 pic3_parent">
                            <img className="object-cover w-full h-full rounded-md mockup-pic3"
                                src="/mockup3.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 3 */}
            {/* Hero Section 4 */}
            <div className="bg-white lg:h-full lg:py-12">
                <div className="mockup4header">
                    <div className="container flex px-6 py-32 mx-auto mockup4_container">

                        <div className="flex items-center justify-center w-full h-96 pic4_parent">
                            <img className="object-cover w-full h-full rounded-md mockup-pic4"
                                src="/mockup4.png" alt="Mock Up Data" />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row lg:w-1/2 ml-14">
                            <div className="max-w-lg">
                                <h1 className="hero-title4">All-in-1 Crypto Exchange<br />Trading, Lending & Staking<br />Platform for WEB 3.0</h1>
                                <p className="mt-0 hero-content4">Top Performance for Fast Trading<br />Deep Liquidity & Tight Spread<br />OTC Desk<br />24/7 Live Support & Customer Service</p>
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
                                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 4 */}
            {/* Footer */}
            <Footer />
            {/* End Footer */}
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