import React from 'react'
import bar from '../home/assests/bar.svg'

const leaderboard = () => {
  return (
    <div className='bg-[#171921] w-full h-screen'>
        <div className='flex justify-between mr-[2rem] ml-[2rem] pt-14'>
            <img src={bar} className='w-[12rem] transform scale-x-[-1]'/>
            <img src={bar} className='w-[12rem]'/>
        </div>
    </div>
  )
}

export default leaderboard