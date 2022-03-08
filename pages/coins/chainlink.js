import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function ChainLink() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <p className={styles.coin__symbol}>{item.symbol} / <span style={{color: "gray"}}>USD</span> </p>
                                <p className={styles.coin__price}>{item.current_price.toFixed(2)}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>{item.high_24h}</p>
                                <p className={styles.coin__low_24}>{item.low_24h}</p>
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientLUNAUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,8.546666666666642L0.6884057971014492,7.379999999999978C1.3768115942028984,6.213333333333314,2.753623188405797,3.879999999999988,4.130434782608695,3.923333333333323C5.507246376811594,3.9666666666666583,6.884057971014492,6.386666666666656,8.26086956521739,9.964444444444434C9.63768115942029,13.54222222222221,11.014492753623188,18.277777777777768,12.391304347826086,20.485555555555553C13.768115942028984,22.69333333333334,15.144927536231883,22.37333333333336,16.52173913043478,21.83888888888892C17.89855072463768,21.30444444444448,19.27536231884058,20.555555555555586,20.652173913043477,19.98555555555558C22.028985507246375,19.415555555555574,23.40579710144927,19.02444444444446,24.782608695652172,18.34444444444445C26.159420289855074,17.664444444444438,27.53623188405797,16.695555555555533,28.91304347826087,16.781111111111088C30.28985507246377,16.866666666666642,31.666666666666668,18.006666666666657,33.04347826086956,19.344444444444445C34.42028985507246,20.68222222222223,35.79710144927537,22.217777777777787,37.17391304347826,23.595555555555563C38.550724637681164,24.973333333333333,39.927536231884055,26.193333333333317,41.30434782608695,26.567777777777764C42.68115942028985,26.942222222222213,44.05797101449275,26.471111111111128,45.43478260869565,25.863333333333355C46.811594202898554,25.255555555555578,48.188405797101446,24.511111111111116,49.565217391304344,23.451111111111107C50.94202898550724,22.391111111111098,52.31884057971015,21.015555555555544,53.69565217391304,20.764444444444432C55.07246376811594,20.513333333333325,56.44927536231884,21.38666666666666,57.82608695652174,21.21555555555555C59.20289855072465,21.044444444444444,60.57971014492754,19.828888888888894,61.95652173913044,19.461111111111112C63.333333333333336,19.09333333333333,64.71014492753623,19.57333333333332,66.08695652173913,19.57333333333332C67.46376811594202,19.57333333333332,68.84057971014492,19.09333333333333,70.21739130434783,18.42222222222222C71.59420289855073,17.75111111111111,72.97101449275362,16.88888888888888,74.34782608695652,17.571111111111104C75.72463768115942,18.253333333333334,77.10144927536233,20.480000000000018,78.4782608695652,21.737777777777804C79.85507246376811,22.995555555555587,81.23188405797102,23.284444444444464,82.60869565217392,22.806666666666683C83.98550724637681,22.328888888888894,85.3623188405797,21.084444444444443,86.73913043478262,18.95444444444444C88.1159420289855,16.82444444444444,89.49275362318842,13.808888888888887,90.86956521739131,12.650000000000006C92.2463768115942,11.491111111111126,93.62318840579711,12.18888888888892,94.31159420289855,12.537777777777817L95,12.886666666666715L95,550L94.31159420289855,550C93.62318840579711,550,92.2463768115942,550,90.86956521739131,550C89.49275362318842,550,88.1159420289855,550,86.73913043478261,550C85.3623188405797,550,83.98550724637681,550,82.60869565217392,550C81.23188405797102,550,79.85507246376811,550,78.4782608695652,550C77.10144927536233,550,75.72463768115942,550,74.34782608695653,550C72.97101449275362,550,71.59420289855073,550,70.21739130434783,550C68.84057971014492,550,67.46376811594202,550,66.08695652173913,550C64.71014492753623,550,63.333333333333336,550,61.95652173913044,550C60.57971014492754,550,59.20289855072465,550,57.82608695652174,550C56.44927536231884,550,55.07246376811594,550,53.69565217391304,550C52.31884057971015,550,50.94202898550724,550,49.565217391304344,550C48.188405797101446,550,46.811594202898554,550,45.434782608695656,550C44.05797101449275,550,42.68115942028985,550,41.30434782608696,550C39.927536231884055,550,38.550724637681164,550,37.17391304347826,550C35.79710144927537,550,34.42028985507246,550,33.04347826086956,550C31.666666666666668,550,30.28985507246377,550,28.913043478260875,550C27.53623188405797,550,26.159420289855074,550,24.782608695652172,550C23.40579710144927,550,22.028985507246375,550,20.652173913043477,550C19.27536231884058,550,17.89855072463768,550,16.52173913043478,550C15.144927536231883,550,13.768115942028984,550,12.391304347826086,550C11.014492753623188,550,9.63768115942029,550,8.26086956521739,550C6.884057971014492,550,5.507246376811594,550,4.130434782608695,550C2.753623188405797,550,1.3768115942028984,550,0.6884057971014492,550L0,550Z" fill="url(#area-gradientLUNAUSDT#007dff)" class="strokePath"></path><path d="M0,8.546666666666642L0.6884057971014492,7.379999999999978C1.3768115942028984,6.213333333333314,2.753623188405797,3.879999999999988,4.130434782608695,3.923333333333323C5.507246376811594,3.9666666666666583,6.884057971014492,6.386666666666656,8.26086956521739,9.964444444444434C9.63768115942029,13.54222222222221,11.014492753623188,18.277777777777768,12.391304347826086,20.485555555555553C13.768115942028984,22.69333333333334,15.144927536231883,22.37333333333336,16.52173913043478,21.83888888888892C17.89855072463768,21.30444444444448,19.27536231884058,20.555555555555586,20.652173913043477,19.98555555555558C22.028985507246375,19.415555555555574,23.40579710144927,19.02444444444446,24.782608695652172,18.34444444444445C26.159420289855074,17.664444444444438,27.53623188405797,16.695555555555533,28.91304347826087,16.781111111111088C30.28985507246377,16.866666666666642,31.666666666666668,18.006666666666657,33.04347826086956,19.344444444444445C34.42028985507246,20.68222222222223,35.79710144927537,22.217777777777787,37.17391304347826,23.595555555555563C38.550724637681164,24.973333333333333,39.927536231884055,26.193333333333317,41.30434782608695,26.567777777777764C42.68115942028985,26.942222222222213,44.05797101449275,26.471111111111128,45.43478260869565,25.863333333333355C46.811594202898554,25.255555555555578,48.188405797101446,24.511111111111116,49.565217391304344,23.451111111111107C50.94202898550724,22.391111111111098,52.31884057971015,21.015555555555544,53.69565217391304,20.764444444444432C55.07246376811594,20.513333333333325,56.44927536231884,21.38666666666666,57.82608695652174,21.21555555555555C59.20289855072465,21.044444444444444,60.57971014492754,19.828888888888894,61.95652173913044,19.461111111111112C63.333333333333336,19.09333333333333,64.71014492753623,19.57333333333332,66.08695652173913,19.57333333333332C67.46376811594202,19.57333333333332,68.84057971014492,19.09333333333333,70.21739130434783,18.42222222222222C71.59420289855073,17.75111111111111,72.97101449275362,16.88888888888888,74.34782608695652,17.571111111111104C75.72463768115942,18.253333333333334,77.10144927536233,20.480000000000018,78.4782608695652,21.737777777777804C79.85507246376811,22.995555555555587,81.23188405797102,23.284444444444464,82.60869565217392,22.806666666666683C83.98550724637681,22.328888888888894,85.3623188405797,21.084444444444443,86.73913043478262,18.95444444444444C88.1159420289855,16.82444444444444,89.49275362318842,13.808888888888887,90.86956521739131,12.650000000000006C92.2463768115942,11.491111111111126,93.62318840579711,12.18888888888892,94.31159420289855,12.537777777777817L95,12.886666666666715" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
                                <p className={styles.coin__low_24}><div className={styles.buybuttons}>
                                <button className={styles.btn_buy}>Buy</button><button className={styles.btn_trade}>Trade</button></div></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ChainLink
