import React from 'react'
import bar from '../home/assests/bar.svg'

const leaderboard = () => {
  return (
    <div className='bg-[#171921] w-full h-auto'>
        <div className='flex justify-between mr-[2rem] ml-[2rem] pt-14'>
            <img src={bar} className='w-[5vw] transform scale-x-[-1]'/>
            <img src={bar} className='w-[5vw]'/>
        </div>
        <div className='border h-auto m-9 rounded-3xl bg-white'>
          <div className='border h-auto m-2 rounded-3xl bg-[#FFFB00] flex flex-row gap-4'>
            <div className='border h-screen w-[70vw] m-2 mt-[5rem] rounded-3xl bg-[#171921]'></div>
            <div className='border h-screen w-[30vw] m-2 mt-[5rem] rounded-3xl bg-[#171921]'></div>

          </div>

        </div>
    </div>
  )
}

export default leaderboard