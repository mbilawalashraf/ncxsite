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
                <div className="max-w-screen-xl mx-auto pb-28 main_hero_section">
                    <div className="container newlyadded_class flex px-6 pt-20 mx-auto">
                        <div className="flex flex-col lg:flex-row h1_parent_landing homepage_hero_title">
                            <div className="max-w-lg hero1_section_text">
                                <h1 className={styles.hero1_title}>Buy Crypto</h1>
                                <p className={styles.hero1_p}>Buy, sell, trade and hold 200+<br />cryptocurrencies on NCX</p>
                                <div className="grid grid-cols-4 store-logo">
                                    <div className="image_div">
                                        <a href="#"
                                            className="lg:inline store_images"><img className="appstore"
                                            src="/appstore.svg" alt="Mock Up Data" />
                                            
                                        </a>
                                    </div>
                                    <div className="">
                                        <a href="#"
                                            className="lg:inline store_images"><img className="googlestore"
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

                        <div className="flex items-center justify-end w-full mock_parent_staking2">
                            {/* <img className="object-cover w-full h-full max-w-2xl rounded-md mockup-pic"
                                src="/mockup.png" alt="Mock Up Data" /> */}
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
        {/* End Hero Section */}
        {/* Steps Section */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4 mt-14">
                        <div>
                            <div className={styles.steps_h1_1}>
                                <h1 id="countdown">145+</h1>
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
            {/* First Carousel */}
            <div className="bg-white lg:h-full lg:py-16">
                <div>
                    <div className="container flex py-32 mx-auto">
                        <div className="carousel carousel-center p-4 space-x-5">
                            <div className="carousel-item">
                            <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg pl-12">
                                <h1 className={styles.hero_title_homepage2}>NCX</h1>
                                <p className={styles.hero_content_landing2}>NCX is an innovative All-in-1 Cryptocurrency Exchange, Trading, Lending & Staking Platform for WEB 3.0, combining the most advanced CEX & DEX features on one Licensed and Secure Platform available in over 200 Countries with offices in Europe, Asia and HQ in Middle East.</p>
                                <div className={styles.hero3_button}>
                                    <a href="#"
                                        className="">Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/1.png" />
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/2.png" />
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/3.png" />
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/4.png" />
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/5.png" />
                            </div> 
                            <div className="carousel-item carousel_img">
                                <img src="/6.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/7.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/8.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/9.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/10.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/11.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/12.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/13.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/14.png" />
                            </div>
                            <div className="carousel-item carousel_img">
                                <img src="/15.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End First Carousel */}
            {/* Hero Section 2 */}
        {/* <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="container flex px-6 py-32 mx-auto">
                        <div className="flex flex-col w-full lg:flex-row h1_parent">
                            <div className="max-w-lg">
                                <h1 className={styles.hero_title_homepage2}>NCX</h1>
                                <p className={styles.hero_content_landing2}>NCX is an innovative All-in-1 Cryptocurrency Exchange, Trading, Lending & Staking Platform for WEB 3.0, combining the most advanced CEX & DEX features on one Licensed and Secure Platform available in over 200 Countries with offices in Europe, Asia and HQ in Middle East.</p>
                                <div className={styles.hero3_button}>
                                    <a href="#"
                                        className="">Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div> */}
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
            {/* Media Center */}
            <div className="lg:h-full lg:py-16 media_parent">
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-full lg:flex-row">
                        <div className="">
                            <h1 className={styles.carousel2_title}>Media Center</h1>
                            <h3 className={styles.carousel2_subtitle}>Read the Latest news and important updates from NCX.</h3>
                            <div><p className={styles.carousel2_subtitle_p}>Read Blog <img src="/arrow.svg" /></p></div>
                        </div>
                    </div>
                <div className="carousel carousel-center carousel_height">
                    <div id="slide1" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media2.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>Ethereum Moves Higher Against BitCoin on a Wave of Positive News</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>TNFTs Coming to Instagram in Several Months as Metaverse is Next Chapter of the internet<br />- Zuckerberg</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media2.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div> */}
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media2.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div> */}
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media2.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_1}>
                                <img src="/media3.png" />
                                <p className={styles.carousel_date1}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore1}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div> */} 
                    </div> 
                    </div>
                </div>          
            </div>
            {/* End Media Center */}
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
                    {/* Blog & News */}
                    <div className="lg:h-full lg:py-16 media_parent">
                <div className="max-w-screen-xl mx-auto">
                    <div className="w-full lg:flex-row">
                        <div className="">
                            <h1 className={styles.carousel2_title}>Blog & News</h1>
                            <h3 className={styles.carousel2_subtitle}>Read the Latest news and important updates from NCX.</h3>
                            <div><p className={styles.carousel2_subtitle_p}>Read Blog <img src="/arrow.svg" /></p></div>
                        </div>
                    </div>
                <div className="carousel carousel-center carousel_height">
                    <div id="slide1" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3 space-x-7">
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog3.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div  className={styles.middle_grid}>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog2.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>Ethereum Moves Higher Against BitCoin on a Wave of Positive News</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog1.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>TNFTs Coming to Instagram in Several Months as Metaverse is Next Chapter of the internet<br />- Zuckerberg</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3 space-x-7">
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog1.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div  className={styles.middle_grid}>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog2.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog3.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div> */}
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3 space-x-7">
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog2.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div className={styles.middle_grid}>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog1.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog3.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div> */}
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full justify-center">
                    <div className="grid grid-cols-3 space-x-7">
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog3.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div className={styles.middle_grid}>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog1.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.carousel_parent_2}>
                                <img src="/blog2.png" />
                                <p className={styles.carousel_date}>March 23</p>
                                <h4>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h4>
                                <div><p className={styles.carousel2_readmore}>Read Blog <img src="/arrow.svg" /></p></div>
                            </div>
                        </div>
                    </div>
                        {/* <div className="absolute flex justify-between transform -translate-y-1/2 ml-0 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div> */}
                    </div> 
                    </div>
                </div>          
            </div>
            {/* End Blog & News */}
        {/* Hero Section 3 */}
        <div className="bg-white lg:h-full lg:py-16">
                <div className="max-w-screen-xl mx-auto">
                <div className="container flex px-6 mx-auto reverse_flex">
                <div className="flex flex-col lg:flex-row pt-16">
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

                        

                        <div className="flex items-center justify-left w-full h-96 signup_vid_parent">
                        <video 
                                autoPlay
                                loop
                                muted
                                className="object-cover w-3/5 h-full rounded-md signup_vid"
                            >
                            <source src="/signup1.mp4" type="video/mp4" />
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


// Bilawal coding starts from here

// function animateValue(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       obj.innerHTML = Math.floor(progress * (start - end) + end);
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }
  
//   const obj = document.getElementById("countdown");
//   animateValue(obj, 145, 0, 5000);


