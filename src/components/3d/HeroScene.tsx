import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#007aff" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.5}>
          <torusKnotGeometry args={[1, 0.3, 64, 16]} />
          <MeshDistortMaterial
            color="#007aff"
            speed={2}
            distort={0.4}
            radius={1}
            emissive="#001a33"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshDistortMaterial
          opacity={0.1}
          transparent
          color="#111"
          distort={0}
        />
      </mesh>
    </>
  );
}
