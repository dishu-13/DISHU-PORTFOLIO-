import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShapes() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]} position={[-3, 1, -2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus ref={torusRef} args={[1, 0.3, 16, 32]} position={[3, -1, -3]}>
          <meshStandardMaterial
            color="#a855f7"
            roughness={0.3}
            metalness={0.9}
          />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[2, 2, -4]}>
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.2}
            metalness={0.7}
          />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
        <Sphere args={[0.5, 32, 32]} position={[-2, -2, -3]}>
          <meshStandardMaterial
            color="#c084fc"
            roughness={0.4}
            metalness={0.6}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#22d3ee" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}