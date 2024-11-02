import { useState, useRef, Suspense } from "react";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 5.5 }));

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01; // Fixed speed for smooth rotation
      ref.current.rotation.y += 0.01; // Fixed speed for smooth rotation
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};



// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-full absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

export default Stars;