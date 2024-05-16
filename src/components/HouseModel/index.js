"use client";
import React, { useRef } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../ModelDraco";

export const HouseModel = () => {
  const modelRef = useRef();

  return (
    <Canvas camera={{ position: [0, 1, 2], fov: 75 }}>
      <ambientLight intensity={1} />
      <Stage environment="city" intensity={0.6}>
        <Model ref={modelRef} />
      </Stage>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={1} // Adjust rotation speed
        autoRotate={true}
        autoRotateSpeed={1} // Adjust auto-rotate speed
      />
    </Canvas>
  );
};
