import styles from '../../styles/Homepage.module.css'

import Nav from "../../components/Nav"

import SearchBar from '../../components/SearchBar'
import TableHeaderLanding from '../../components/TableHeaderLanding'
import CoinListLanding from '../../components/CoinsListLanding'

import { useState } from 'react';

import Footer from "../../components/Footer"

function HomePage({ coinsData }) {

    const [search, setSearch] = useState('');

    const filteredCoins = coinsData.filter(coin => coin.symbol.toLowerCase().includes(search.toLowerCase()));

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
      }

    return(
        <>
        <Nav />
        {/* Hero Section */}
        <div className="bg-white lg:h-full">
                <div className="max-w-screen-xl mx-auto pb-28">
                    <div className="container flex px-6 pt-20 mx-auto">
                        <div className="flex flex-col lg:flex-row h1_parent_landing">
                            <div className="max-w-lg hero1_section_text">
                                <h1 className={styles.hero1_title}>Buy Crypto</h1>
                                <p className={styles.hero1_p}>Buy, sell, trade and hold 200+<br />cryptocurrencies on NCX</p>
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
                                        className="">Get Started 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full">
                            {/* <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" /> */}
                            <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-3/5 h-full rounded-md"
                            >
                            <source src="/buycrypto2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
        </div>
        {/* End Hero Section */}
        {/* Steps Section */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4 mt-14">
                        <div>
                            <div className={styles.steps_h1_1}>
                                <h1>200+</h1>
                            </div>
                            <div className={styles.steps_p_1}>
                                <p>NCX Platform is available<br />in over 200 Countries</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_h1_1}>
                                <h1>75+</h1>
                            </div>
                            <div className={styles.steps_p_1}>
                                <p>Cryptocurrency<br />Trading Pairs</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_h1_1}>
                                <h1>41</h1>
                            </div>
                            <div className={styles.steps_p_1}>
                                <p>NCX Team Members<br />through 14 Countries</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.steps_h1_1}>
                                <h1>24/7</h1>
                            </div>
                            <div className={styles.steps_p_1}>
                                <p>Live Customer Service,<br />Tech Support & OTC Desk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Steps Section */}
            {/* Hero Section 2 */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg">
                                <h1 className={styles.hero_title_homepage2}>NCX</h1>
                                <p className={styles.hero_content_landing2}>NCX is an innovative All-in-1 Cryptocurrency Exchange, Trading, Lending & Staking Platform for WEB 3.0, combining the most advanced CEX & DEX features on one Licensed and Secure Platform available in over 200 Countries with offices in Europe, Asia and HQ in Middle East.</p>
                                {/* <div className="grid grid-cols-4 store-logo">
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
                                </div> */}
                                <div className={styles.hero3_button}>
                                    <a href="#"
                                        className="">Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-center w-full h-96 mock_parent">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* End Hero Section 2 */}
        {/* Hero Section 3 */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-lg mx-auto">
                <div className="container flex px-6 mx-auto reverse_flex">
                <div className="flex flex-col w-full lg:flex-row lg:w-1/2 ml-14 ">
                            <div className="max-w-lg pt-36">
                                <h1 className="hero-title2">Fast Deposit &<br />Withdrawals</h1>
                                <p className={styles.hero_content_landing3}>From Visa & Mastercard to instant SEPA<br />deposits, youve got options for getting the<br />funds you need, when you need them.</p>
                                <div className="grid grid-cols-4 store-logo2 py-4">
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline"><img className=""
                                            src="/visa.svg" alt="Mock Up Data" />
                                            
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.hero1_button}>
                                    <a href="#"
                                        className="">Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_security3">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md reverse_img"
                                src="/security_phone5.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
        </div>
        {/* End Hero Section 3 */}
        {/* Hero Section 4 */}
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
                                <div className={styles.hero3_button}>
                                    <a href="#"
                                        className="">Get Started
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
            {/* End Hero Section 4 */}
            {/* Coin List Section */}
            <div className="bg-white lg:h-full bg_coinslist">
                <div className="max-w-screen-xl mx-auto">
                    <div className={styles.coin_scroll}>
                        <h1>Select Crypto</h1>
                        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
                        <TableHeaderLanding />
                        <CoinListLanding coinsData={filteredCoins} />
                    </div>
                </div>
            </div>
            {/* End Coin List Section */}
            {/* Hero Section 4 */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg pt-32">
                                <h1 className={styles.hero_title_homepage4}>NCX Card</h1>
                                <h3 className={styles.hero_content_subtitle}>Your Digital Assets Are Just a Swipe Away</h3>
                                <p className={styles.hero_content_landing4}>Accepted by 40+ million merchants worldwide<br />Instant 2% cashback on all purchases<br />Flexible repayment options<br />Free virtual cards<br />Payments in local currencies<br />No monthly/annual fees, no FX fees</p>
                                {/* <div className="grid grid-cols-4 store-logo">
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
                                </div> */}
                                <div className={styles.hero4_button}>
                                    <a href="#"
                                        className="">Get Your NCX Card
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 mock_parent_homepage4">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic_homepage4"
                                src="/ncxcard.png" alt="Mock Up Data" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 4 */}
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
            {/* Hero Section */}
        <div className="bg-white lg:h-full">
                <div className="max-w-screen-xl mx-auto pb-28">
                    <div className="container flex px-6 pt-20 mx-auto">
                        <div className="flex flex-col lg:flex-row pt-20">
                            <div className="max-w-lg hero1_section_text">
                                <h1 className={styles.hero_title_staking}>Earn Up to 70% Annual<br />Interest Staking &<br />Lending Crypto on NCX</h1>
                                <p className={styles.hero_p_staking}>Maximize your crypto yield compounding<br />interest on the platform using most advanced<br />CEX & DEX Staking and Lending features</p>
                                
                                <div className={styles.hero1_button}>
                                    <a href="#"
                                        className="">Earn Interest 
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full staking_vid_parent">
                            {/* <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" /> */}
                            <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-3/5 h-full rounded-md staking_vid"
                            >
                            <source src="/staking.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
        </div>
        {/* End Hero Section */}
        {/* Hero Section 3 */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                <div className="container flex px-6 mx-auto reverse_flex">
                <div className="flex flex-col lg:flex-row pt-36">
                            <div className="max-w-lg hero1_section_text">
                                <h1 className={styles.hero_title_started_staking}>Get Started in Minutes<br />in 2 Simple Steps</h1>
                                <p className={styles.hero_p_started_staking}>Sign up to create NCX account<br />Verify your identity & Start Buying,<br />Selling, Trading and Staking<br />Cryptocurrencies in Minutes</p>
                                
                                <div className={styles.hero1_button}>
                                    <a href="#"
                                        className="">Sign Up 
                                    </a>
                                </div>
                            </div>
                        </div>

                        

                        <div className="flex items-center justify-left w-full h-96 mock_parent_staking2">
                        <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-3/5 h-full rounded-md staking_vid2"
                            >
                            <source src="/draft.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section 3 */}
        <Footer />
        </>
    )
}

export default HomePage

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `);
  
    const coinsData = await res.json();
  
    return {
      props: {
        coinsData
      }
    }
  
    
  
  }

