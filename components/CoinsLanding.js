import styles from '../styles/Coins.module.css'
// import Link from 'next/link';

const CoinsLanding = ({ name, id, price, symbol, marketcap, volume, image, priceChange, high24, low24, rank }) => {
    return (
        // <Link href={`/coin/${id}`}>
        //     <a>
            <div className={styles.coin__container_landing}>
            <div className={styles.coin__row}>
                <div className={styles.coin__data}>
                    <p className={styles.coin__rank}><span><img src='/star.svg' /></span>{rank}</p>
                    <div className={styles.icons_sym_landing}>
                        <img src={image} alt={name} className={styles.coin_logo} />
                        <p className={styles.coin__symbol_landing}>{name} <span className={styles.symbol_span}>{symbol}</span> </p>
                    </div>
                    <p className={styles.coin__price_landing}>${price.toFixed(2)}</p>
                    {priceChange < 0 ? (
                        <p className={styles.coin_red_landing}>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className={styles.coin_green_landing}>+{priceChange.toFixed(2)}%</p>
                    )}
                    {/* <p className={styles.coin__high_24_landing}>${high24}</p> */}
                    {/* <p className={styles.coin__low_24}>${volume}</p> */}
                    
                </div>
            </div>
        </div>
        //     </a>
        // </Link>
    )
}

// 
export default CoinsLanding