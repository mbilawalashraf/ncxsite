import Bit from "./bitcoin"
import Eth from "./eth"
import Tether from "./tether"
import Binance from "./binance"
import USDCoin from "./usdcoin"
import Ripple from "./ripple"
import TerraLuna from "./terra-luna"
import Solana from "./solana"
import Cardano from "./cardano"
import Avalanche2 from "./avalanche-2"
import Polkadot from "./polkadot"
import BinanceUSD from "./binance-usd"
import Doge from "./doge"
import TerraUSD from "./terrausd"
import ShibaInu from "./shibainu"

function CoinsList() {
    return(
        <>     
            <Bit />
            <Eth />
            <Tether />
            <Binance />
            <USDCoin />
            <Ripple />
            {/* <TerraLuna />
            <Solana />
            <Cardano />
            <Avalanche2 />
            <Polkadot />
            <BinanceUSD />
            <Doge />
            <TerraUSD />
            <ShibaInu /> */}
        </>
    )
}

export default CoinsList

