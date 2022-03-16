import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Tron() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tron&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {
                data.map((item) => (
                    <div key={item.id} className={styles.coin__container}>
                        <div className={styles.coin__row}>
                            <div className={styles.coin__data}>
                            <div className={styles.icons_sym}>
                                <img className={styles.coin_logo} src="/icons/trx.png" />
                                <p className={styles.coin__symbol}>{item.name} <span className={styles.symbol_span}>{item.symbol}</span> </p>
                            </div>
                                <p className={styles.coin__price}>${item.current_price.toLocaleString('en')}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>+{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>${item.market_cap.toLocaleString()}</p>
                                <p className={styles.coin__low_24}>${item.total_volume.toLocaleString()}</p>
                                <div className={styles.coin__innerrow}>
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientUNIUSDT#45B26B" x2="1" y2="1"><stop offset="10%" stopColor="#45B26B" stopOpacity="0.01"></stop><stop offset="100%" stopColor="#45B26B" stopOpacity="0.5"></stop></linearGradient></defs><path d="M0,0.6923076923077132L0.6884057971014492,1.865384615384628C1.3768115942028984,3.038461538461543,2.753623188405797,5.3846153846153735,4.130434782608695,7.000000000000007C5.507246376811594,8.61538461538464,6.884057971014492,9.500000000000076,8.26086956521739,10.423076923076994C9.63768115942029,11.346153846153912,11.014492753623188,12.307692307692314,12.391304347826086,12.846153846153824C13.768115942028984,13.384615384615335,15.144927536231883,13.499999999999952,16.52173913043478,14.961538461538415C17.89855072463768,16.423076923076877,19.27536231884058,19.230769230769184,20.652173913043477,21.019230769230713C22.028985507246375,22.807692307692236,23.40579710144927,23.576923076922984,24.782608695652172,24.269230769230663C26.159420289855074,24.96153846153835,27.53623188405797,25.576923076922963,28.91304347826087,25.884615384615262C30.28985507246377,26.192307692307576,31.666666666666668,26.192307692307576,33.04347826086956,26.249999999999883C34.42028985507246,26.30769230769219,35.79710144927537,26.42307692307681,37.17391304347826,26.49999999999991C38.550724637681164,26.57692307692301,39.927536231884055,26.615384615384595,41.30434782608695,26.63461538461539C42.68115942028985,26.653846153846178,44.05797101449275,26.653846153846178,45.43478260869565,26.653846153846185C46.811594202898554,26.653846153846178,48.188405797101446,26.653846153846178,49.565217391304344,26.653846153846185C50.94202898550724,26.653846153846178,52.31884057971015,26.653846153846178,53.69565217391304,26.653846153846185C55.07246376811594,26.653846153846178,56.44927536231884,26.653846153846178,57.82608695652174,26.653846153846185C59.20289855072465,26.653846153846178,60.57971014492754,26.653846153846178,61.95652173913044,26.653846153846185C63.333333333333336,26.653846153846178,64.71014492753623,26.653846153846178,66.08695652173913,26.653846153846185C67.46376811594202,26.653846153846178,68.84057971014492,26.653846153846178,70.21739130434783,26.653846153846185C71.59420289855073,26.653846153846178,72.97101449275362,26.653846153846178,74.34782608695652,25.346153846153857C75.72463768115942,24.03846153846153,77.10144927536233,21.423076923076877,78.4782608695652,20.326923076923027C79.85507246376811,19.230769230769184,81.23188405797102,19.653846153846143,82.60869565217392,20.71153846153844C83.98550724637681,21.769230769230735,85.3623188405797,23.461538461538368,86.73913043478262,24.788461538461416C88.1159420289855,26.115384615384468,89.49275362318842,27.076923076922938,90.86956521739131,26.288461538461434C92.2463768115942,25.499999999999925,93.62318840579711,22.96153846153844,94.31159420289855,21.692307692307697L95,20.423076923076955L95,976.1538461538405L94.31159420289855,976.1538461538404C93.62318840579711,976.1538461538406,92.2463768115942,976.1538461538406,90.86956521739131,976.1538461538404C89.49275362318842,976.1538461538406,88.1159420289855,976.1538461538406,86.73913043478261,976.1538461538404C85.3623188405797,976.1538461538406,83.98550724637681,976.1538461538406,82.60869565217392,976.1538461538404C81.23188405797102,976.1538461538406,79.85507246376811,976.1538461538406,78.4782608695652,976.1538461538404C77.10144927536233,976.1538461538406,75.72463768115942,976.1538461538406,74.34782608695653,976.1538461538404C72.97101449275362,976.1538461538406,71.59420289855073,976.1538461538406,70.21739130434783,976.1538461538404C68.84057971014492,976.1538461538406,67.46376811594202,976.1538461538406,66.08695652173913,976.1538461538404C64.71014492753623,976.1538461538406,63.333333333333336,976.1538461538406,61.95652173913044,976.1538461538404C60.57971014492754,976.1538461538406,59.20289855072465,976.1538461538406,57.82608695652174,976.1538461538404C56.44927536231884,976.1538461538406,55.07246376811594,976.1538461538406,53.69565217391304,976.1538461538404C52.31884057971015,976.1538461538406,50.94202898550724,976.1538461538406,49.565217391304344,976.1538461538404C48.188405797101446,976.1538461538406,46.811594202898554,976.1538461538406,45.434782608695656,976.1538461538404C44.05797101449275,976.1538461538406,42.68115942028985,976.1538461538406,41.30434782608696,976.1538461538404C39.927536231884055,976.1538461538406,38.550724637681164,976.1538461538406,37.17391304347826,976.1538461538404C35.79710144927537,976.1538461538406,34.42028985507246,976.1538461538406,33.04347826086956,976.1538461538404C31.666666666666668,976.1538461538406,30.28985507246377,976.1538461538406,28.913043478260875,976.1538461538404C27.53623188405797,976.1538461538406,26.159420289855074,976.1538461538406,24.782608695652172,976.1538461538404C23.40579710144927,976.1538461538406,22.028985507246375,976.1538461538406,20.652173913043477,976.1538461538404C19.27536231884058,976.1538461538406,17.89855072463768,976.1538461538406,16.52173913043478,976.1538461538404C15.144927536231883,976.1538461538406,13.768115942028984,976.1538461538406,12.391304347826086,976.1538461538404C11.014492753623188,976.1538461538406,9.63768115942029,976.1538461538406,8.26086956521739,976.1538461538404C6.884057971014492,976.1538461538406,5.507246376811594,976.1538461538406,4.130434782608695,976.1538461538404C2.753623188405797,976.1538461538406,1.3768115942028984,976.1538461538406,0.6884057971014492,976.1538461538404L0,976.1538461538405Z" fill="url(#area-gradientUNIUSDT#45B26B)" className="strokePath"></path><path d="M0,0.6923076923077132L0.6884057971014492,1.865384615384628C1.3768115942028984,3.038461538461543,2.753623188405797,5.3846153846153735,4.130434782608695,7.000000000000007C5.507246376811594,8.61538461538464,6.884057971014492,9.500000000000076,8.26086956521739,10.423076923076994C9.63768115942029,11.346153846153912,11.014492753623188,12.307692307692314,12.391304347826086,12.846153846153824C13.768115942028984,13.384615384615335,15.144927536231883,13.499999999999952,16.52173913043478,14.961538461538415C17.89855072463768,16.423076923076877,19.27536231884058,19.230769230769184,20.652173913043477,21.019230769230713C22.028985507246375,22.807692307692236,23.40579710144927,23.576923076922984,24.782608695652172,24.269230769230663C26.159420289855074,24.96153846153835,27.53623188405797,25.576923076922963,28.91304347826087,25.884615384615262C30.28985507246377,26.192307692307576,31.666666666666668,26.192307692307576,33.04347826086956,26.249999999999883C34.42028985507246,26.30769230769219,35.79710144927537,26.42307692307681,37.17391304347826,26.49999999999991C38.550724637681164,26.57692307692301,39.927536231884055,26.615384615384595,41.30434782608695,26.63461538461539C42.68115942028985,26.653846153846178,44.05797101449275,26.653846153846178,45.43478260869565,26.653846153846185C46.811594202898554,26.653846153846178,48.188405797101446,26.653846153846178,49.565217391304344,26.653846153846185C50.94202898550724,26.653846153846178,52.31884057971015,26.653846153846178,53.69565217391304,26.653846153846185C55.07246376811594,26.653846153846178,56.44927536231884,26.653846153846178,57.82608695652174,26.653846153846185C59.20289855072465,26.653846153846178,60.57971014492754,26.653846153846178,61.95652173913044,26.653846153846185C63.333333333333336,26.653846153846178,64.71014492753623,26.653846153846178,66.08695652173913,26.653846153846185C67.46376811594202,26.653846153846178,68.84057971014492,26.653846153846178,70.21739130434783,26.653846153846185C71.59420289855073,26.653846153846178,72.97101449275362,26.653846153846178,74.34782608695652,25.346153846153857C75.72463768115942,24.03846153846153,77.10144927536233,21.423076923076877,78.4782608695652,20.326923076923027C79.85507246376811,19.230769230769184,81.23188405797102,19.653846153846143,82.60869565217392,20.71153846153844C83.98550724637681,21.769230769230735,85.3623188405797,23.461538461538368,86.73913043478262,24.788461538461416C88.1159420289855,26.115384615384468,89.49275362318842,27.076923076922938,90.86956521739131,26.288461538461434C92.2463768115942,25.499999999999925,93.62318840579711,22.96153846153844,94.31159420289855,21.692307692307697L95,20.423076923076955" stroke="#45B26B" fill="transparent" strokeWidth="1" className="strokePath"></path></svg></p>
                                <button className={styles.btn_buy}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Tron

