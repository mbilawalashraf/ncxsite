import styles from '../../styles/Landing.module.css'


import Nav from "../../components/Nav";

import Footer from "../../components/Footer";

function Landing() {
    return (
        <>
            <Nav />
            {/* Hero Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg">
                                <h1 className="hero-title">Buy Crypto</h1>
                                <div className="mt-6">
                                    <a href="#"
                                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Get Started 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full">
                            {/* <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" /> */}
                            <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-full h-full rounded-md"
                            >
                            <source src="/buycrypto.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            {/* Steps Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-full lg:flex-row">
                        <div className="">
                            <h1 className={styles.steps_title}>Get Started in Minutes</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 my-14">
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div>
                                        <img className="" src="/test.gif" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>1. Register</h1>
                            </div>
                            <div className={styles.steps_p}>
                                <p>Sign up to create your<br />free NCX account</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div>
                                        <img className="" src="/person.gif" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>2. Verify</h1>
                            </div>
                            <div className={styles.steps_p}>
                                <p>Verify your identity with<br />one of our trusted<br />verification partners</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div>
                                        <img className="" src="/deposit.gif" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>3. Deposit</h1>
                            </div>
                            <div className={styles.steps_p}>
                                <p>Deposit your funds<br />securely through our<br />supported options</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div>
                                        <img className="" src="/trade.gif" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>4. Trade</h1>
                            </div>
                            <div className={styles.steps_p}>
                                <p>Buy, sell and swap digital<br />assets 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign: 'center'}}>
                    <a href="#"
                        className="block px-12 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 lg:inline hover:bg-blue-400">Get Started
                    </a>
                    </div>
                </div>
            </div>
            {/* End Steps Section */}
            {/* Hero Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg">
                                <h1 className="hero-title">Trade Anywhere<br />Anytime</h1>
                                <p className={styles.hero_content_landing}>NCX new desktop & mobile experience gives<br />you fast transactions, low fees, and<br />personalized price alerts for the assets you<br />care about - wherever you are.</p>
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
            <Footer />
        </>
    )
}



export default Landing