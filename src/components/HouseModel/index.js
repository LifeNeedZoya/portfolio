"use client";
import React from "react";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "../ModelDraco";

const HouseModel = () => {
  return (
    <Canvas aria-setsize={500}>
      <ambientLight intensity={1} />
      <Stage environment={"city"} intensity={0.6}>
        <Model />
      </Stage>
      <OrbitControls
        enableZoom={false}
        rotateSpeed={10}
        rotation={true}
        autoRotate={true}
        autoRotateSpeed={10}
        onPointerMove={false}
      />
    </Canvas>
  );
};

export default HouseModel;
