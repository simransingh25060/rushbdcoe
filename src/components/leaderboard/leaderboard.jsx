import React from 'react'
import bar from '../home/assests/bar.svg'
import { useEffect,useState} from 'react'

const leaderboard = () => {
  const fetchLeaderboardData=async()=>{
    try{
      const data=await fetch('https://www.hackerrank.com/rest/contests/rush-hour-bdcoe/leaderboard?offset=0&limit=1000&_=1700119232836',{
        method:"GET",
      
      })
      const json=await data.json()
      console.log("dekho api response")
      console.log(json)
    }
    catch(error){
      console.log("Error Fetching Leaderboard data",error)
    }
  
  }
  useEffect(()=>{
    fetchLeaderboardData()
  },[])

  
  const [teams, setTeams] = useState([
     { team: 'Coders', points: '50' },
  { team: 'Phoenix', points: '30' },
  { team: 'Mavericks', points: '70' },
  { team: 'Innovators', points: '45' },
  { team: 'Builders', points: '20' },
  { team: 'Pioneers', points: '65' },
  { team: 'Titans', points: '15' },
  { team: 'Strategists', points: '40' },
  { team: 'Ninjas', points: '10' },
  { team: 'Gurus', points: '5' },
  { team: 'CodeHeroes', points: '25' },
  { team: 'TechLeaders', points: '80' },
  { team: 'FutureGeniuses', points: '55' },
  { team: 'DigitalNomads', points: '35' },
  { team: 'EpicCoders', points: '60' },
  { team: 'SuperCoders', points: '75' },
  { team: 'PowerPlayers', points: '90' },
  { team: 'CodeMasters', points: '100' },
  { team: 'EliteSquad', points: '85' },
  { team: 'ChampionCoders', points: '95' },
  { team: 'TechWizards', points: '110' },
  { team: 'DataDons', points: '120' },
  { team: 'ByteBusters', points: '115' },
  { team: 'AlgorithmAllies', points: '125' },
  { team: 'PixelPundits', points: '130' },
  { team: 'BinaryBrilliance', points: '140' },
  { team: 'CodeChiefs', points: '150' },
  { team: 'ByteBlasters', points: '145' },
  { team: 'CodeCrafters', points: '160' },
  { team: 'InfiniteLoopers', points: '155' },
  { team: 'DataDynasty', points: '165' },
  { team: 'TechTrailblazers', points: '170' },
  { team: 'AlgorithmArtists', points: '180' },
  { team: 'LogicLords', points: '175' },
  { team: 'DataDemons', points: '190' },
  { team: 'CodeConquerors', points: '185' },
  { team: 'TechTycoons', points: '200' },
  { team: 'CodeChampions', points: '195' },
  { team: 'TechMasters', points: '210' },
  { team: 'InnovativeTechies', points: '205' },
  { team: 'CodeCrusaders', points: '220' },
  { team: 'ByteBrigade', points: '225' },
  { team: 'CodeCreators', points: '240' },
  { team: 'TechTitans', points: '235' },
  { team: 'LogicLegends', points: '250' },
  ]);


  const deletedteams = [
    { team: 'EpicCoders', points: '60', out: '4:27' },
    { team: 'SuperCoders', points: '75', out: '4:27' },
    { team: 'PowerPlayers', points: '90', out: '4:27' },
    { team: 'CodeMasters', points: '100', out: '4:27' },
    { team: 'EliteSquad', points: '85', out: '4:27' },
    { team: 'ChampionCoders', points: '95', out: '4:27' },
    { team: 'TechWizards', points: '110', out: '4:27' },
  ];


  const [eliminatedTeams, setEliminatedTeams] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      eliminateTeams();
    }, 1000); 
    return () => clearInterval(interval); 
  }, [teams]);

  const eliminateTeams = () => {
    if (teams.length === 3) return; 
    const batchSize = 3; 
    const teamsToEliminate = teams.slice(0, batchSize);
    const remainingTeams = teams.slice(batchSize); 

    const currentTime = new Date().toLocaleTimeString(); 
    const updatedTeams = teamsToEliminate.map((team) => ({
      ...team,
      eliminatedAt: currentTime, 
    }));

    setEliminatedTeams((prev) => [...prev, ...updatedTeams]);
    setTeams(remainingTeams); 
  };
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);



  return (
    <div className='bg-[#171921] overflow-y-auto mb-0'>
    <div className='bg-[#171921] w-auto h-auto'>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #fffb00;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>
      
        <div className='flex justify-between mr-[2rem] ml-[2rem] pt-14'>
            <img src={bar} className='w-[5vw] transform scale-x-[-1]'/>
            <img src={bar} className='w-[5vw]'/>
        </div>
        <div className='border h-auto m-9 rounded-3xl bg-white'>
          <div className='border h-auto m-2 rounded-3xl bg-[#FFFB00]'>
            <div className='flex justify-center'>
        <span className='font-Istok text-[2rem] pt-3 font-bold'>No. of Participation Left:{teams.length}</span>
      </div>
          <div className='flex flex-row gap-4'>
            <div className='border h-[calc(100vh-0rem)] w-[70vw] m-2 mt-[2rem] rounded-3xl bg-[#171921] overflow-y-auto'>
            <div className="flex flex-col items-center justify-center p-5"><span className='font-Istok text-white text-[2rem] font-bold'>RANKING</span></div>
            <div className="flex flex-row justify-around gap-[18rem] p-1 mr-6">
              <span className='font-Istok text-white text-[1rem] font-bold'>Rank</span>
              <span className='font-Istok text-white text-[1rem] font-bold'>Team</span>
              <span className='font-Istok text-white text-[1rem] font-bold'>Points</span>
            </div>
            <div className="flex flex-col gap-4 p-4">
            {sortedTeams.map((team, index) => (
      <div
        key={index}
        className="border rounded-3xl bg-[#FFF] flex items-center justify-around gap-[20rem] p-4 mb-4"
      >
        <span className="text-xl font-semibold text-black">{index + 1}</span>
        <span className="text-lg font-bold text-black ml-9">{team.team}</span> 
        <span className="text-lg text-black">{team.points} Points</span> 
      </div>
    ))}
  </div>
            </div>
            <div className='border h-screen w-[30vw] m-2 mt-[2rem] rounded-3xl bg-[#171921] flex flex-col'>
              <div className="flex flex-col items-center justify-center h-[10%]"><span className='font-Istok text-white text-[2rem] font-bold'>NEXT ELIMINATION</span></div>
              <div className=" h-auto flex flex-col gap-5 justify-between p-4">
              {eliminatedTeams.slice(-3).map((team, index) => (
                <div
                  key={index}
                  className="border h-auto rounded-3xl flex items-center justify-between bg-[#E97474] text-black px-4"
                >
                 
                  <div className="flex flex-col">
                    <span className="text-[2rem] font-bold">{team.team}</span>
                    <span className="text-[1rem] font-bold">Score: {team.points}</span>
                  </div>
                 
                  <div className="text-[1rem] text-black">
                    {team.eliminatedAt}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-auto overflow-y-auto border-t mt-4 p-4">
            <div className="flex flex-col items-center justify-center h-auto bg-[#171921]"><span className='font-Istok text-white text-[2rem] font-bold'>ELIMINATED</span></div>
            <div className="mt-4 flex flex-col gap-3 overflow-y-auto h-auto p-4">
              {eliminatedTeams.slice(0,-3).map((teams,index) => (
                <div  key={index}
                className="border h-[15%] rounded-lg flex items-center justify-between bg-[#F2F2F2] text-black px-4">
                     <div className="flex flex-col">
                  <span className="text-[1.5rem] font-bold">{teams.team}</span>
                  <span className="text-[1rem]">Score: {teams.points}</span>
                </div>
                </div>
              ))}
            </div>
            </div>
            </div>
            </div>
            
            

          </div>

        </div>
    </div>
    </div>
  )
}

export default leaderboard