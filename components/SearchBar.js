import styles from '../styles/Searchbar.module.css';

const Searhbar = ({ ...rest }) => {
    return (
        <div className={styles.coin__search}>
            <input className={styles.coin__input} {...rest} placeholder="Search Coin" />
        </div>
    )
}

export default Searhbar