import styles from '../../styles/Landing.module.css'


import Nav from "../../components/Nav";
import SearchBar from '../../components/SearchBar';
import TableHeaderLanding from "../../components/TableHeaderLanding"

import CoinListLanding from '../../components/CoinsListLanding';

import Footer from "../../components/Footer";

import { useState } from 'react';


function Landing({ coinsData }) {
    // console.log(coinsData)
    const [search, setSearch] = useState('');

    const filteredCoins = coinsData.filter(coin => coin.symbol.toLowerCase().includes(search.toLowerCase()));

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
      }

    return (
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
                    <div className="w-full lg:flex-row">
                        <div className="">
                            <h1 className={styles.steps_title}>Get Started in Minutes</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 mt-14">
                        <div>
                            <div className={styles.steps_background}>
                                <a href="#" className="lg:inline">
                                    <div className={styles.icon_register}>
                                        <img className="" src="/test.svg" alt="Mock Up Data" />
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
                                    <div className={styles.icon_verify}>
                                        <img className="" src="/person.svg" alt="Mock Up Data" />
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
                                    <div className={styles.icon_deposit}>
                                        <img className="" src="/trade.svg" alt="Mock Up Data" />
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
                                    <div className={styles.icon_trade}>
                                        <img className="" src="/deposit.svg" alt="Mock Up Data" />
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
                    <div className={styles.hero2_button}>
                    <a href="#"
                        className="">Get Started
                    </a>
                    </div>
                </div>
            </div>
            {/* End Steps Section */}
            {/* Coin List Section */}
            {/* SearchBar */}
            
            {/* SearchBar */}
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
                    </div>
                </div>
            </div>
            {/* End Hero Section 2 */}
            <Footer />
        </>
    )
}



export default Landing

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