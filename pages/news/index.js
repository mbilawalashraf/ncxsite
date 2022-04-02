import styles from '../../styles/Tab.module.css'

import Nav from "../../components/Nav"
import Footer from "../../components/Footer"



function NewsPage() {
    return(
        <>
        <Nav />
        {/* News/Blog Grid */}
        <div className="bg-white lg:h-full lg">
                <div className="max-w-screen-xl mx-auto px-4">
                    
                        <div className="grid grid-cols-5 mt-14">
                            <div className="col-span-4">
                            <div className={styles.tabs}>
                                    <input type="radio" name="tabs" id="tabone" checked="checked" />
                                    <label htmlFor="tabone">Press Room</label>
                                    <div className={styles.tab}>
                                        <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div>
                                    </div>

                                    <input type="radio" name="tabs" id="tabtwo" />
                                    <label htmlFor="tabtwo">News</label>
                                    <div className={styles.tab}>
                                    <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div>
                                    </div>
  
                                    <input type="radio" name="tabs" id="tabthree" />
                                    <label htmlFor="tabthree">Blog</label>
                                    <div className={styles.tab}>
                                    <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div>
                                    </div>
  
                                    <input type="radio" name="tabs" id="tabfour" />
                                    <label htmlFor="tabfour">Market Analysis</label>
                                    <div className={styles.tab}>
                                    <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div>
                                    </div>

                                    <input type="radio" name="tabs" id="tabfive" />
                                    <label htmlFor="tabfive">Insights</label>
                                    <div className={styles.tab}>
                                    <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div>
                                    </div>

                                    <input type="radio" name="tabs" id="tabsix" />
                                    <label htmlFor="tabsix">Explainer</label>
                                    <div className={styles.tab}>
                                    <div className="container">
                                            <div className="flex mx-auto mt-4 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>ApeCoin Soars After Launch, BAYC NFT Prices Pump and Dump</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection’s new utility and governance token ApeCoin (APE) was airdropped to holders of NFTs in the BAYC ecosystem on Thursday, soaring in price as...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news2.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Are Metaverse Coins a Good Investment? Axie Infinity (AXS)...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The concept of the metaverse blossomed last year, with several metaverse-inspired projects and tokens getting widespread attention and attracting investment. These projects and tokens...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news3.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Ethereum Moves Higher Against Bitcoin on a Wave of Positive News</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>The price of ethereum (ETH) has outperformed bitcoin (BTC) over the past 24 hours, after news emerged that a final testnet has gone through the steps necessary for transitioning Ethereum...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news4.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>NFTs Coming to Instagram in ‘Several Months’ as Metaverse is...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>Meta-owned major photo and video social network Instagram might start supporting “some” NFTs “over the next several months,” according to multiple reports, citing Meta CEO Mark...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto mt-6 h-80">
                                                <div className="flex relative w-6/12">
                                                    <img className="object-cover w-full h-full news-pic"
                                                        src="/news5.png" alt="Mock Up Data" />
                                                </div>

                                                <div className="flex relative w-6/12">
                                                    <div className="max-w-lg w-full ml-10 mt-4">
                                                        <h1 className={styles.news_title}>Metaverse Banking: HSBC Enters The Sandbox as JPMorgan...</h1>
                                                        <h4 className={styles.news_tag}>News</h4>
                                                        <p className={styles.news_content}>With major financial institutions increasingly moving into the metaverse, UK bank HSBC is the first global financial services provider to enter virtual world The Sandbox, following in the steps...</p>
                                                        <div className="grid grid-cols-2">
                                                            <div className={styles.news_date}>
                                                                <h4>March 22, 2022</h4>
                                                            </div>
                                                            <div className={styles.news_readmore}>
                                                                <h4>READ MORE →</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                            {/* Pagination Section */}
                                            <div className="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6 float-right">
                                            <div className="flex-1 flex justify-between sm:hidden">
                                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
                                                <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
                                            </div>
                                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                
                                                <div>
                                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Previous</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                    <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                                                    <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                    <span className="sr-only">Next</span>
                                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    </a>
                                                </nav>
                                                </div>
                                            </div>
                                            </div>
                                            {/* End of Pagination Section */}
                                            </div>
                                        </div><h1>The fourth tab</h1>
                                    </div>
  
                                </div>
                            </div>
                            <div className="col-span-1 bg-black">
                                <h1>Hello World</h1>
                               
                            </div>
                        </div>
                  
                </div>
        </div>
        {/* End News/Blog Grid */}
        <Footer />
        </>
    )
}

export default NewsPage