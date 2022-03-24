import styles from '../../styles/Security.module.css'

import Nav from "../../components/Nav"

import Footer from "../../components/Footer"

function Security() {
    return(
        <>
            <Nav />
            {/* Hero Section */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent_security">
                            <div className="max-w-lg">
                                <h1 className={styles.hero1_title}>Global WEB 3.0<br />Cryptocurrency Exchange</h1>
                                <p className="mt-0 hero-content_security">Buy, Sell  Trade over 100+ cryptocurrencies on NCX<br />Fast, Safe & Secure </p>
                                <div className="grid grid-cols-4 store-logo">
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className="appstore"
                                            src="/appstore.svg" alt="Mock Up Data" />
                                            
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className="googlestore"
                                            src="/googleplay.svg" alt="Mock Up Data" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.hero1_button}>
                                    <a href="#"
                                        className="">Trade Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security">
                            <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-3/5 rounded-md security_video"
                            >
                            <source src="/security_vid.mp4" type="video/mp4" />
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
                            <h1 className={styles.steps_title}>Advanced Multi-Level Security<br />& Global Regulatory Complience</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 mt-14">
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div className={styles.icon_register}>
                                        <img className="" src="/security1.svg" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>Licensed & Regulated<br />Digital Assets Institution</h1>
                            </div>
                            <div className={styles.steps_p}>
                                <p>Verify your identity with one of<br />our trusted verification partners.</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div className={styles.icon_verify}>
                                        <img className="" src="/security2.svg" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>Secure Socket Layer<br />(SSL) Encryption</h1>
                            </div>
                            <div className={styles.steps_p}>
                            <p>Verify your identity with one of<br />our trusted verification partners.</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div className={styles.icon_deposit}>
                                        <img className="" src="/security3.svg" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>Biometric-Based<br/>Identity Verification</h1>
                            </div>
                            <div className={styles.steps_p}>
                            <p>Verify your identity with one of<br />our trusted verification partners.</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div className={styles.icon_trade}>
                                        <img className="" src="/security4.svg" alt="Mock Up Data" />
                                    </div>
                                </a>
                            </div>
                            <div className={styles.steps_h1}>
                                <h1>KYC & AML Global<br />Complience Standards</h1>
                            </div>
                            <div className={styles.steps_p}>
                            <p>Verify your identity with one of<br />our trusted verification partners.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.hero2_button}>
                    <a href="#"
                        className="">Get Started
                    </a>
                    </div> */}
                </div>
            </div>
            {/* End Steps Section */}
            {/* Hero Section 2 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row pt-52">
                            <div className="max-w-lg">
                                <h1 className={styles.hero3}>2FA Authentication</h1>
                                <p className="mt-0 hero-content-security">Google Authenticator<br />SMS Authentication<br />Email Authentication</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md"
                                src="/security_phone5.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 2 */}
            {/* Hero Section 3 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto reverse_flex">
                        <div className="flex flex-col w-full lg:flex-row pt-52">
                            <div className="max-w-lg content_reverse">
                                <h1 className={styles.hero3}>Biometric<br />Identification</h1>
                                <p className="mt-0 hero-content-security_reverse">Using Fingerprint & Face Recognition<br />for Additional Convenience and Security.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security3">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md reverse_img"
                                src="/security_phone1.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 3 */}
            {/* Hero Section 4 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row pt-52">
                            <div className="max-w-lg">
                                <h1 className={styles.hero3}>24/7 Support</h1>
                                <p className="mt-0 hero-content-security">Dedicated 24/7 Live Customer Service<br />and Tech Support via email and live chat<br />to answer your questions and support<br />enquiries at any time.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security4">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md"
                                src="/security_phone2.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 4 */}
            {/* Hero Section 5 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto reverse_flex">
                        <div className="flex flex-col w-full lg:flex-row pt-52">
                            <div className="max-w-lg content_reverse">
                                <h1 className={styles.hero3}>Whitelisting</h1>
                                <p className="mt-0 hero-content-security_reverse">Whitelisting your wallet addresses prevents<br />a third party, in the event this third party has<br />acquired your credentials, from withdrawing<br />funds to an undesired wallet address.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security5">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md reverse_img"
                                src="/security_phone3.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 5 */}
            {/* Hero Section 6 */}
            <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row pt-40">
                            <div className="max-w-lg">
                                <h1 className={styles.hero3}>Withdrawal<br />Confirmations<br />& Log-in Alerts</h1>
                                <p className="mt-0 hero-content-security">Users receive Log-in alerts and<br />Withdrawal Confirmations to their email<br />address to prevent unauthorised access<br />or withdrawal attempt go unnoticed by<br />the account holder.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security6">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md"
                                src="/security_phone4.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 6 */}
            <Footer />
        </>
    )
}

export default Security