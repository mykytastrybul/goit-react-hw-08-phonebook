import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'block', width: '150px', margin: '0 auto' }}>
      <ThreeCircles
        color="black"
        innerCircleColor="red"
        height={150}
        width={150}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};

export default Loader;
