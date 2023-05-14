import React from 'react';
import Particles from 'react-particles-js';

function WaveParticles() {
  return (
    <Particles 
      params={{
        particles: {
          number: {
            value: 50
          },
          size: {
            value: 3
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 5
            }
          }
        }
      }} 
    />
  );
}

export default WaveParticles;
