import React from "react";

const Cloud = ({ onClick }) => {
  return (
    <div style={cloudContainerStyle} onClick={onClick}>
      <div style={cloudRowStyle}>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
      </div>
      <div style={cloudRowStyle}>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
      </div>
      <div style={cloudRowStyle}>
        <div style={cloudPixelStyle}></div>
        <div style={cloudPixelStyle}></div>
      </div>
    </div>
  );
};

const cloudContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: '20%',
  padding: 0,
  cursor: 'pointer' // Indicates that the cloud is clickable
};

const cloudRowStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const cloudPixelStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: 'white',
  margin: '0px',
};

export default Cloud;
