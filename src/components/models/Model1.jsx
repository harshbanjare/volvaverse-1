import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PCFSoftShadowMap } from "three";

const ModelViewer = ({ url }) => {
  const glbUrl = url;

  return (
    <Canvas
      camera={{ position: [0, 5, 10] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} castShadow />
      <Suspense fallback={null}>
        <Model glbUrl={glbUrl} />
      </Suspense>
      <Stars />
      <OrbitControls />
    </Canvas>
  );
};

const Model = ({ glbUrl }) => {
  const gltf = useLoader(GLTFLoader, glbUrl);

  return gltf ? <primitive object={gltf.scene} scale={[1, 1, 1]} /> : null;
};

export default ModelViewer;
