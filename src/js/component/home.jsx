import React, { useState } from "react";
import TrafficLights from "./trafficLights";
import Cloud from "./cloud";

//create your first component
const Home = () => {
  const [timeModeOn, setTimeModeOn] = useState(true);

  const handleCloudClick = () => {
    setTimeModeOn(!timeModeOn);
  };

  return (
    <div className="traffic-light-container" style={trafficLightContainerStyle}>
      <div style={infoContainerStyle}>
        <h1 style={headingStyle}>Welcome to the Traffic Light Challenge!</h1>
        <p style={textStyle}>Can you discover the hidden switch that toggles the traffic lights between auto and manual mode? <br></br> Give it a try and see if you can find it!</p>
        <p style={modeTextStyle}>Current Mode: <span style={modeTextHighlightStyle}>{timeModeOn ? "Auto" : "Manual"}</span></p>
      </div>
        {/* <div style={cloudContainerStyle}>
          <Cloud />
        </div>     */}
        <TrafficLights timeModeOn={timeModeOn} />
      <div onClick={handleCloudClick} className="traffic-light-pole" style={trafficLightPoleStyle}></div>
    </div>
  );
};

const trafficLightContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0',
  height: '100vh',
  backgroundColor: '#87CEEB', // Sky blue background
  fontFamily: 'Arial, sans-serif', // Better font
};

const infoContainerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  borderRadius: '10px',
  marginTop: '10px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  color: '#2c3e50', // Darker blue
  fontSize: '2em',
};

const textStyle = {
  color: '#34495e', // Darker grey
  fontSize: '1.2em',
};

const modeTextStyle = {
  color: '#34495e',
  fontSize: '1.2em',
};

const modeTextHighlightStyle = {
  fontWeight: 'bold',
  color: '#e74c3c', // Red color for the highlight
};

const cloudContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '100%',
  marginTop: '20px',
};

const trafficLightPoleStyle = {
  width: '30px',
  height: '260px',
  backgroundColor: '#1a2639',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  cursor: 'pointer', // Cursor changes to pointer to indicate clickable element
};

export default Home;
