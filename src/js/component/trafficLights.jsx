import React, { useEffect, useState } from "react"; 

const TrafficLights = ({ timeModeOn }) => {
  const [selectedColor, setSelectedColor] = useState("red");

  useEffect(() => {
    if (timeModeOn) {
      const interval = setInterval(() => {
        setSelectedColor((prevColor) => {
          switch (prevColor) {
            case 'red':
              return 'yellow';
            case 'yellow':
              return 'green';
            case 'green':
              return 'red';
            default:
              return 'red';
          }
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [timeModeOn]);

  return (
    <div className="traffic-light" style={trafficLightsContainer}>
      <div
        onClick={() => { if (!timeModeOn) setSelectedColor('red');}}
        className={`light red ${selectedColor === 'red' ? "glow-red" : ""}`}
        style={redLightStyle}
      ></div>
      <div
        onClick={() => { if (!timeModeOn) setSelectedColor('yellow');}}
        className={`light yellow ${selectedColor === 'yellow' ? "glow-yellow" : ""}`}
        style={yellowLightStyle}
      ></div>
      <div
        onClick={() => { if (!timeModeOn) setSelectedColor('green');}}
        className={`light green ${selectedColor === 'green' ? "glow-green" : ""}`}
        style={greenLightStyle}
      ></div>
    </div>
  );
};

const trafficLightsContainer = {
  width: '85px',
  height: '240px',
  backgroundColor: '#1a2639',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '20px 15px',
  borderRadius: '8px',
  marginTop: '50px'
};

const redLightStyle = {
  width: '50px',
  height: '75px',
  backgroundColor: 'red',
  borderRadius: '50%',
  margin: '10px 0',
};

const yellowLightStyle = {
  width: '50px',
  height: '75px',
  backgroundColor: 'yellow',
  borderRadius: '50%',
  margin: '10px 0',
};

const greenLightStyle = {
  width: '50px',
  height: '75px',
  backgroundColor: 'green',
  borderRadius: '50%',
  margin: '10px 0',
};

export default TrafficLights;
