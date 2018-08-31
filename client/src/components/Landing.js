import React from 'react';
import card from 'Card';

const Landing = () => {
  const logo2 = require('./img/sketchin.jpg');
  return (
      <div style={{ textAlign: 'center', backgroundColor: '#000000' }}>
        <center>
          <card />
          //<img alt='logo2' src={String(logo2)} style={{ width: '100%', height: 'auto' }}/>
        </center>
      </div>
  );
};

export default Landing;
