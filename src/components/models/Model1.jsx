import { Canvas, useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model1 = () => {
  const glbUrl = "/models/model1.glb";

  const gltf = useLoader(GLTFLoader, glbUrl);

  return (
    <div>
      <Canvas>{gltf ? <primitive object={gltf.scene} /> : null}</Canvas>
    </div>
  );
};

export default Model1;
