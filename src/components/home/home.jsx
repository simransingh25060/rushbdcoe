import React from 'react'
import bar from '../home/assests/bar.svg'
import flag from '../home/assests/lead.png'

const home = () => {
  return (
    <div className='bg-[#171921] w-full h-screen'>
        <div className='flex items-baseline justify-center gap-4 pt-[3rem]'>
        <img src={flag} className='w-[5vw] h-[5vh]'/>
        </div>
        <div className='flex items-baseline justify-center gap-4'>
        {/* <img src={flag} className='w-[3vw] h-[4vh]'/> */}
            <span className='text-white font-Belleza text-[3rem]'>LEADERBOARD</span>
        </div>
        <div className='flex items-baseline justify-center gap-4 pt-[2rem]'>
            <img src='https://ucarecdn.com/d7633d0f-f620-4fb1-8c0f-51041e187436/' className='w-[3vw] h-[4vh]'/>
            <span className='text-white font-Belleza text-[3rem]'>BIG DATA CENTRE OF EXCELLENCE</span>
        </div>
        <div className='flex justify-center pt-3'>
            <img src="https://ucarecdn.com/2e717701-3aae-4a2f-b3b8-3c5fe055b86a/RUSHHOUR20.png" className='w-[65rem]'/>
        </div>
        <div className='flex justify-center pt-3'>
            <span className='text-white font-Gabarito text-[2rem]'>Race the clock !</span>
        </div>
        <div className='flex justify-between mr-[2rem] ml-[2rem] pt-14'>
            <img src={bar} className='w-[12vw] transform scale-x-[-1]'/>
            <img src={bar} className='w-[12vw]'/>
        </div>
        
        
        </div>
  )
}

export default home