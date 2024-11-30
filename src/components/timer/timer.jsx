import { useState, useEffect } from 'react'; 

const TimerControl = () => {
  const [removeTeamsCount, setRemoveTeamsCount] = useState('');
  const [timerDuration, setTimerDuration] = useState(''); 
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [rotationMinutes, setRotationMinutes] = useState(0); 
  const [rotationSeconds, setRotationSeconds] = useState(0); 


  const [removedTeams, setRemovedTeams] = useState([]);
  const [totalTeamsRemoved, setTotalTeamsRemoved] = useState(0);

  const handleRemoveTeams = () => {
    const teamsToRemove = parseInt(removeTeamsCount);
    if (!isNaN(teamsToRemove) && teamsToRemove > 0) {
      //api
      const currentTime = new Date().toLocaleTimeString();
  
      setRemovedTeams((prev) => [...prev, { teamsRemoved: teamsToRemove, time: currentTime }]);
      setTotalTeamsRemoved((prev) => prev + teamsToRemove);
      console.log(`Removing ${teamsToRemove} teams at ${currentTime}`);
      setRemoveTeamsCount('');
    } else {
      alert('Please enter a valid number of teams to remove.');
    }
  };

  const startTimer = () => {
    const parsedTime = parseInt(timerDuration);
    if (isNaN(parsedTime) || parsedTime <= 0) {
      alert('Please enter a valid timer duration.');
      return;
    }

    try {
      //api
      console.log(`Starting timer for ${parsedTime} minutes...`);
      const response = { success: true, startTime: Date.now(), duration: parsedTime };
    
      if (response.success) {
        setIsRunning(true); 
        setTime(parsedTime * 60);
        setTimerStatus('Timer is running...');
      } else {
        setTimerStatus('Failed to start the timer.');
      }
    } catch (error) {
      console.error('Error starting timer:', error);
      setTimerStatus('Failed to start timer');
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    if (time > 0) {
      const totalDurationInSeconds = parseInt(timerDuration) * 60;
      const rotationPerSecond = 360 / 60;

      const remainingTime = totalDurationInSeconds - time;

      setRotationMinutes((remainingTime / totalDurationInSeconds) * 360); 
      setRotationSeconds((remainingTime % 60) * rotationPerSecond); 
    }
  }, [time, timerDuration]);

  const formatMinutes = (seconds) => Math.floor(seconds / 60);
  const formatSeconds = (seconds) => seconds % 60;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 h-screen bg-black">
      <div className="space-y-4 mt-8">
        <input
          type="number"
          value={timerDuration}
          onChange={(e) => setTimerDuration(e.target.value)}
          className="border-2 p-2 rounded text-black"
          placeholder="Enter timer duration in minutes"
          min="1"
        />
        <button
          onClick={startTimer}
          className="bg-yellow-500 text-white p-2 rounded m-4"
        >
          Start Timer
        </button>
      </div>

      {isRunning && time > 0 && (
        <div className="flex space-x-6 mt-8">
          <div className="relative w-[2cm] h-[2cm] border-2 border-yellow-500 rounded-full flex items-center justify-center">
            <h2 className="text-2xl font-bold text-yellow-500">
              {formatMinutes(time)}m
            </h2>

            <div
              className="absolute w-2 h-2 bg-yellow-500 rounded-full"
              style={{
                transform: `rotate(${rotationMinutes}deg) translateY(-1cm)`,
                transition: 'transform 1s linear',
              }}
            />
          </div>

          <div className="relative w-[2cm] h-[2cm] border-2 border-white-500 rounded-full flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">
              {formatSeconds(time)}s
            </h2>

            <div
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                transform: `rotate(${rotationSeconds}deg) translateY(-1cm)`,
                transition: 'transform 1s linear',
              }}
            />
          </div>
        </div>
      )}

      <div className="space-y-4 mt-8">
        <input
          type="number"
          value={removeTeamsCount}
          onChange={(e) => setRemoveTeamsCount(e.target.value)}
          className="border-2 p-2 rounded text-black"
          placeholder="Enter number of teams to remove"
          min="1"
        />
        <button
          onClick={handleRemoveTeams}
          className="bg-red-500 text-white p-2 rounded m-4"
        >
          Remove
        </button>
      </div>


      <div className="space-y-4 mt-8 flex flex-row gap-4">
 
        <div className="bg-yellow-500 text-white p-4 rounded shadow-lg">
          <h3 className="text-xl">Total Teams Removed</h3>
          <p className="text-2xl">{totalTeamsRemoved}</p>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
          <h3 className="text-xl">Last Removed Teams Time</h3>
          {removedTeams.length > 0 ? (
            <p className="text-2xl">{removedTeams[removedTeams.length - 1].time}</p>
          ) : (
            <p className="text-2xl">No teams removed yet</p>
          )}
        </div>
      </div>

      <div className="mt-8 bg-green-500 text-white p-5 rounded shadow-lg w-full">
        <h3 className="text-xl font-bold">Teams Removal Log</h3>
        {removedTeams.length > 0 ? (
          <ul>
            {removedTeams.map((entry, index) => (
              <li key={index} className="text-lg">
                {entry.teamsRemoved} teams removed at {entry.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No teams removed yet</p>
        )}
      </div>
    </div>
  );
};

export default TimerControl;

