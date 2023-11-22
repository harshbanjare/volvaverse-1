// import React, { Suspense } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { PCFSoftShadowMap } from "three";

// const ModelViewer = ({ url }) => {
//   const glbUrl = url;

//   return (
//     <Canvas
//       camera={{ position: [0, 5, 10] }}
//       onCreated={({ gl }) => {
//         gl.shadowMap.enabled = true;
//         gl.shadowMap.type = PCFSoftShadowMap;
//       }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} castShadow />
//       <Suspense fallback={null}>
//         <Model glbUrl={glbUrl} />
//       </Suspense>
//       <Stars />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// const Model = ({ glbUrl }) => {
//   const gltf = useLoader(GLTFLoader, glbUrl);

//   return gltf ? <primitive object={gltf.scene} scale={[1, 1, 1]} /> : null;
// };

// export default ModelViewer;

import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ link }) {
  // let link;
  // console.log(url);
  // if (url) {
  //   link = url;
  // } else {
  //   link =
  //     "https://bafybeifu3hwr35xszvjkdcaam4bldhyx4mqxzemvbjjexj45bubaewighy.ipfs.nftstorage.link/16m.glb";
  // }
  // console.log(link);
  const { scene } = useGLTF(link);
  const groupRef = useRef();
  const bbox = new THREE.Box3().setFromObject(scene);
  const center = bbox.getCenter(new THREE.Vector3());

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.x = -center.x;
      groupRef.current.position.y = -center.y;
      groupRef.current.position.z = -center.z;
    }
  }, [center]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function ModelViewer({ url }) {
  // console.log(url);
  // console.log("threeScene params", params);
  return (
    <Canvas pixelRatio={[1, 4]} camera={{ position: [10, 10, 10], fov: 5 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model link={url} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
