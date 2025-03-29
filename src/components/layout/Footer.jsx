import portal from "/src/assets/portal.svg"

const Footer = () => {
  return (
    <div className='px-24 flex justify-between text-[#00000066] font-medium text-sm w-[90%] pt-20 pb-32'>
        <div>
            <img src={portal} alt="" />
        </div>
        <ul>
            <li className='text-[16px] text-black mb-5 '>Learn</li>
            <li><a href="">DEVELOPERS</a></li>
        </ul>
        <ul>
            <li className='text-[16px] text-black mb-5 '>Community</li>
            <li className='mb-2'><a href="">X</a></li>
            <li className='mb-2'><a href="">TELEGRAM</a></li>
            <li className='mb-2'><a href="">SUPPORT</a></li>
        </ul>
        <ul>
            <li className='text-[16px] text-black mb-5 '>Buy Portal</li>
            <li className='mb-2'><a href="">BINANCE</a></li>
            <li className='mb-2'><a href="">BYBIT</a></li>
            <li className='mb-2'><a href="">KRAKEN</a></li>
            <li className='mb-2'><a href="">GATE.IO</a></li>
            <li className='mb-2'><a href="">BITFINEX</a></li>
            <li className='mb-2'><a href="">UNISWAP</a></li>
        </ul>
        <ul>
            <li className='text-[16px] text-black mb-5 '>Legal</li>
            <li className='mb-2 text-black'>PORTAL HUB</li>
            <li className='mb-2'><a href="">TERMS OF SERVICES</a></li>
            <li className='mb-5'><a href="">PRIVACY</a></li>
            <li className='mb-2 text-black'>PORTAL PAY</li>
            <li className='mb-2'><a href="">TERMS OF SERVICES</a></li>
            <li className='mb-5'><a href="">PRIVACY</a></li>
            <li className='mb-2 text-black'><a href="">PORTAL BRIDGE</a></li>
            <li className='mb-5'><a href="">TERMS OF SERVICES</a></li>
        </ul>
        

    </div>
  )
}

export default Footer