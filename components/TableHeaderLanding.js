import styles from '../styles/Coins.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faChartColumn } from '@fortawesome/free-solid-svg-icons'

const TableHeaderLanding = () => {
    return (
        <>
            <div className={styles.header__container}>
                <div className={styles.header__row}>
                    <div className={styles.coin__data_p}>
                        <p className={styles.header__name_landing}>Name</p>
                        <p className={styles.header__price_landing}>Price</p>
                        <p className={styles.header__24h_landing}>24h%</p>
                        {/* <p className={styles.header__marketcap_landing}>Market Cap <FontAwesomeIcon icon={faCircleDollarToSlot} /></p>
                        <p className={styles.header__volume_landing}>Volume(24h) <FontAwesomeIcon icon={faChartColumn} /></p>
                        <p className={styles.header__chart_landing}>Chart</p> */}
                        {/* <p>Action</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableHeaderLanding