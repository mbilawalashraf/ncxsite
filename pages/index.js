import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

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
            {/* Hero Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row lg:w-1/2">
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

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            {/* Hero Section 2 */}
            <div className="bg-white lg:h-full lg:py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic2"
                                src="/mockup2.png" alt="Mock Up Data" />
                        </div>

                        <div className="flex flex-col w-full lg:flex-row lg:w-1/2 ml-14">
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
            <footer className="text-center lg:text-left bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mx-6 py-10 text-center md:text-left">
                        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            <div className="">
                                {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Products
                                </h6> */}
                                <p className="mb-4">
                                <a href="#!" className="">Buy Crypto</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Crypto Exchange</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">NCX Card</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">NCX Prime</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Earn</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Referral Program</a>
                                </p>
                            </div>
                            <div className="">
                                {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Useful links
                                </h6> */}
                                <p className="mb-4">
                                <a href="#!" className="">About Us</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Blog & News</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Media Center</a>
                                </p>
                            </div>
                            <div className="">
                                {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Useful links
                                </h6> */}
                                <p className="mb-4">
                                <a href="#!" className="">Help Center</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">FAQ</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Security</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Contact Us</a>
                                </p>
                            </div>
                            <div className="">
                                {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                                Useful links
                                </h6> */}
                                <p className="mb-4">
                                <a href="#!" className="">Terms & Condition</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Privacy Policy</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Fees and Limits</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">KYX and AML Policy</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Prohibited Jurisdictions</a>
                                </p>
                                <p className="mb-4">
                                <a href="#!" className="">Cookies Policy</a>
                                </p>
                            </div>
                            <div className="">
                                <div className="footer_logo_header">
                                    <img className="" src="/NCXlogo.svg" alt="Mock Up Data" />
                                    <div className="text-right social_logos">
                                        <div className="grid grid-cols-3 grid_socials">
                                            <div className="fb_footer">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                                                className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512">
                                                <path fill="currentColor"
                                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                                </path>
                                                </svg>
                                            </div>
                                            <div className="twitter_footer">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                                                className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="ig_insta">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                                className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path fill="currentColor"
                                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="small_links">
                                        <p>support@ncx.cx</p>
                                        <p>Powered by CryptoLink O.U.</p>
                                        <p>© 2022 NCX.CX all right reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="grid grid-cols-6 card_group">
                            <div className="visa_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/visa.png" alt="Mock Up Data" />
                                    
                                </a>
                            </div>
                            <div className="bt_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/bt.png" alt="Mock Up Data" />
                                </a>
                            </div>
                            <div className="sepa_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/sepa.png" alt="Mock Up Data" />
                                </a>
                            </div>
                            <div className="advcash_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/advcash.png" alt="Mock Up Data" />
                                </a>
                            </div>
                            <div className="pm_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/pm.png" alt="Mock Up Data" />
                                </a>
                            </div>
                            <div className="xoo_card">
                                <a href="#"
                                    className="lg:inline"><img className=""
                                    src="/xoo.png" alt="Mock Up Data" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
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