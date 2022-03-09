import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Bit() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientBTCUSDT#007dff" x2="1" y2="1"><stop offset="10%" stopColor="#007dff" stopOpacity="0.01"></stop><stop offset="100%" stopColor="#007dff" stopOpacity="0.5"></stop></linearGradient></defs><path d="M0,10.625250000000005L0.6884057971014492,10.062781250000011C1.3768115942028984,9.500312500000017,2.753623188405797,8.375375000000028,4.130434782608695,7.822218750000023C5.507246376811594,7.269062500000018,6.884057971014492,7.287687499999993,8.26086956521739,6.3682812499999955C9.63768115942029,5.448874999999998,11.014492753623188,3.5914375000000285,12.391304347826086,2.988312500000028C13.768115942028984,2.3851875000000278,15.144927536231883,3.0363749999999965,16.52173913043478,2.940968749999978C17.89855072463768,2.8455624999999585,19.27536231884058,2.0035624999999513,20.652173913043477,2.0169999999999604C22.028985507246375,2.03043749999997,23.40579710144927,2.8993124999999953,24.782608695652172,5.521624999999993C26.159420289855074,8.143937499999991,27.53623188405797,12.51968749999996,28.91304347826087,14.478437499999949C30.28985507246377,16.437187499999933,31.666666666666668,15.978937499999937,33.04347826086956,15.618187499999953C34.42028985507246,15.257437499999968,35.79710144927537,14.994187499999997,37.17391304347826,14.909593749999999C38.550724637681164,14.825000000000001,39.927536231884055,14.919062499999972,41.30434782608695,14.81246874999997C42.68115942028985,14.705874999999969,44.05797101449275,14.39862499999999,45.43478260869565,14.738875000000005C46.811594202898554,15.07912500000002,48.188405797101446,16.066875000000028,49.565217391304344,17.424781250000024C50.94202898550724,18.78268750000002,52.31884057971015,20.510750000000005,53.69565217391304,22.106437499999995C55.07246376811594,23.702124999999977,56.44927536231884,25.165437499999964,57.82608695652174,25.98496874999996C59.20289855072465,26.804499999999962,60.57971014492754,26.980249999999973,61.95652173913044,27.026718749999983C63.333333333333336,27.073187499999992,64.71014492753623,26.99037499999999,66.08695652173913,26.796093749999997C67.46376811594202,26.601812500000005,68.84057971014492,26.296062500000016,70.21739130434783,25.84540625000002C71.59420289855073,25.39475000000002,72.97101449275362,24.799187500000016,74.34782608695652,24.085531250000006C75.72463768115942,23.371875,77.10144927536233,22.54012499999999,78.4782608695652,22.274312499999994C79.85507246376811,22.0085,81.23188405797102,22.30862500000003,82.60869565217392,22.135031250000043C83.98550724637681,21.961437500000056,85.3623188405797,21.31412500000006,86.73913043478262,20.684468750000047C88.1159420289855,20.05481250000003,89.49275362318842,19.44281249999999,90.86956521739131,19.550093749999974C92.2463768115942,19.657374999999956,93.62318840579711,20.483937499999957,94.31159420289855,20.897218749999954L95,21.310499999999955L95,735L94.31159420289855,735C93.62318840579711,735,92.2463768115942,735,90.86956521739131,735C89.49275362318842,735,88.1159420289855,735,86.73913043478261,735C85.3623188405797,735,83.98550724637681,735,82.60869565217392,735C81.23188405797102,735,79.85507246376811,735,78.4782608695652,735C77.10144927536233,735,75.72463768115942,735,74.34782608695653,735C72.97101449275362,735,71.59420289855073,735,70.21739130434783,735C68.84057971014492,735,67.46376811594202,735,66.08695652173913,735C64.71014492753623,735,63.333333333333336,735,61.95652173913044,735C60.57971014492754,735,59.20289855072465,735,57.82608695652174,735C56.44927536231884,735,55.07246376811594,735,53.69565217391304,735C52.31884057971015,735,50.94202898550724,735,49.565217391304344,735C48.188405797101446,735,46.811594202898554,735,45.434782608695656,735C44.05797101449275,735,42.68115942028985,735,41.30434782608696,735C39.927536231884055,735,38.550724637681164,735,37.17391304347826,735C35.79710144927537,735,34.42028985507246,735,33.04347826086956,735C31.666666666666668,735,30.28985507246377,735,28.913043478260875,735C27.53623188405797,735,26.159420289855074,735,24.782608695652172,735C23.40579710144927,735,22.028985507246375,735,20.652173913043477,735C19.27536231884058,735,17.89855072463768,735,16.52173913043478,735C15.144927536231883,735,13.768115942028984,735,12.391304347826086,735C11.014492753623188,735,9.63768115942029,735,8.26086956521739,735C6.884057971014492,735,5.507246376811594,735,4.130434782608695,735C2.753623188405797,735,1.3768115942028984,735,0.6884057971014492,735L0,735Z" fill="url(#area-gradientBTCUSDT#007dff)" className="strokePath"></path><path d="M0,10.625250000000005L0.6884057971014492,10.062781250000011C1.3768115942028984,9.500312500000017,2.753623188405797,8.375375000000028,4.130434782608695,7.822218750000023C5.507246376811594,7.269062500000018,6.884057971014492,7.287687499999993,8.26086956521739,6.3682812499999955C9.63768115942029,5.448874999999998,11.014492753623188,3.5914375000000285,12.391304347826086,2.988312500000028C13.768115942028984,2.3851875000000278,15.144927536231883,3.0363749999999965,16.52173913043478,2.940968749999978C17.89855072463768,2.8455624999999585,19.27536231884058,2.0035624999999513,20.652173913043477,2.0169999999999604C22.028985507246375,2.03043749999997,23.40579710144927,2.8993124999999953,24.782608695652172,5.521624999999993C26.159420289855074,8.143937499999991,27.53623188405797,12.51968749999996,28.91304347826087,14.478437499999949C30.28985507246377,16.437187499999933,31.666666666666668,15.978937499999937,33.04347826086956,15.618187499999953C34.42028985507246,15.257437499999968,35.79710144927537,14.994187499999997,37.17391304347826,14.909593749999999C38.550724637681164,14.825000000000001,39.927536231884055,14.919062499999972,41.30434782608695,14.81246874999997C42.68115942028985,14.705874999999969,44.05797101449275,14.39862499999999,45.43478260869565,14.738875000000005C46.811594202898554,15.07912500000002,48.188405797101446,16.066875000000028,49.565217391304344,17.424781250000024C50.94202898550724,18.78268750000002,52.31884057971015,20.510750000000005,53.69565217391304,22.106437499999995C55.07246376811594,23.702124999999977,56.44927536231884,25.165437499999964,57.82608695652174,25.98496874999996C59.20289855072465,26.804499999999962,60.57971014492754,26.980249999999973,61.95652173913044,27.026718749999983C63.333333333333336,27.073187499999992,64.71014492753623,26.99037499999999,66.08695652173913,26.796093749999997C67.46376811594202,26.601812500000005,68.84057971014492,26.296062500000016,70.21739130434783,25.84540625000002C71.59420289855073,25.39475000000002,72.97101449275362,24.799187500000016,74.34782608695652,24.085531250000006C75.72463768115942,23.371875,77.10144927536233,22.54012499999999,78.4782608695652,22.274312499999994C79.85507246376811,22.0085,81.23188405797102,22.30862500000003,82.60869565217392,22.135031250000043C83.98550724637681,21.961437500000056,85.3623188405797,21.31412500000006,86.73913043478262,20.684468750000047C88.1159420289855,20.05481250000003,89.49275362318842,19.44281249999999,90.86956521739131,19.550093749999974C92.2463768115942,19.657374999999956,93.62318840579711,20.483937499999957,94.31159420289855,20.897218749999954L95,21.310499999999955" stroke="#007dff" fill="transparent" strokeWidth="1" className="strokePath"></path></svg></p>
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

export default Bit

