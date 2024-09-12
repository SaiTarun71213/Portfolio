import React from 'react';
import { Canvas } from '@react-three/fiber'; // Import the Canvas from react-three-fiber
import { OrbitControls, Sphere } from '@react-three/drei'; // Import Drei helpers

const ThreeDModel = () => {
  return (
    <Canvas style={{ height: '300px' }}>
      {/* Add ambient lighting for soft light in all directions */}
      <ambientLight intensity={0.5} />
      {/* Add a directional light to simulate sunlight */}
      <directionalLight position={[0, 10, 5]} intensity={1} />
      
      {/* OrbitControls allow for rotation, zoom, and panning */}
      <OrbitControls />
      
      {/* The Sphere is the 3D shape that we'll render */}
      <Sphere args={[1, 100, 100]}>
        {/* Apply a basic material with color */}
        <meshStandardMaterial color="#ff7e5f" />
      </Sphere>
    </Canvas>
  );
};

export default ThreeDModel;
