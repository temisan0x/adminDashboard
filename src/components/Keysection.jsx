import animating from "../assets/images/animating.gif"
import Whitebutton from "./ui/Whitebutton"
import wallet from "../assets/images/wallet.svg"
import hub from "../assets/images/hub.svg"
import pay from "../assets/images/pay.svg"
import porta from "../assets/images/porta.svg"

const Keysection = () => {
  return (
    <div className=' mx-auto px-24'>
      <h2 className='text-6xl font-bold leading-[1.2] mb-6'>$PORTAL is your key to <br />the Portal Ecosystem</h2>
      <hr />
      <div className='h-[700px] grid grid-cols-12  grid-rows-4 gap-3 my-4'>
          <div className=' bg-[#ad96f7] col-span-8 row-span-4 rounded-xl flex flex-col justify-between p-5 font-bold'>
            <h3 className='text-3xl text-white'>Buy $PORTAL</h3>
            <div className="w-[440px] h-[440px] self-center">
            <img src={animating} alt="" width={440} height={440} className="self-center" />
            </div>
            <Whitebutton />
           
          </div>
          <div className='bg-[#f6f6f6] col-span-2 row-span-2 rounded-xl p-4 flex flex-col  '>
            <p className="text-sm text-[#00000066]  mb-4">DISTRIBUTION</p>
            <img src={wallet} alt="" width={125} />
           <div className=" mt-auto">
           <Whitebutton/>
           </div>
          </div>
          <div className='bg-[#f6f6f6] col-span-2 row-span-2 rounded-xl p-4 flex flex-col  '>
            <p className="text-sm text-[#00000066]  mb-4">DISTRIBUTION</p>
            <img src={hub} alt="" width={125} />
           <div className=" mt-auto">
           <Whitebutton/>
           </div>
          </div>
          <div className='bg-[#f6f6f6] col-span-2 row-span-2 rounded-xl p-4 flex flex-col  '>
            <p className="text-sm text-[#00000066]  mb-4">LIQUIDITY</p>
            <img src={pay} alt="" width={125} />
           <div className=" mt-auto">
           <Whitebutton/>
           </div>
          </div>
          <div className='bg-[#f6f6f6] col-span-2 row-span-2 rounded-xl p-4 flex flex-col  '>
            <p className="text-sm text-[#00000066]  mb-4">TOKEN</p>
            <img src={porta} alt="" width={125} />
           <div className=" mt-auto">
           <Whitebutton/>
           </div>
          </div>
          <hr />
      </div>
      
    </div>
  )
}

export default Keysection