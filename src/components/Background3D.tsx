import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

function DataNode({ position, color, size = 0.08 }: { position: [number, number, number]; color: string; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
    </mesh>
  );
}

function DataBar({ position, height, color }: { position: [number, number, number]; height: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 0.8 + Math.sin(state.clock.elapsedTime * 0.8 + position[0] * 2) * 0.3;
      meshRef.current.scale.y = scale;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.04, height, 0.04]} />
      <meshStandardMaterial color={color} transparent opacity={0.35} />
    </mesh>
  );
}

function ConnectionLines({ points }: { points: [number, number, number][] }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = Math.sqrt(
          (points[i][0] - points[j][0]) ** 2 +
          (points[i][1] - points[j][1]) ** 2 +
          (points[i][2] - points[j][2]) ** 2
        );
        if (dist < 1.8) {
          positions.push(...points[i], ...points[j]);
        }
      }
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [points]);

  useFrame((state) => {
    if (lineRef.current) {
      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.12 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#60a5fa" transparent opacity={0.15} />
    </lineSegments>
  );
}

function FloatingGrid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <gridHelper args={[8, 20, '#3b82f6', '#3b82f6']} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial transparent opacity={0.03} />
      </gridHelper>
    </group>
  );
}

function ScrollScene({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, bars } = useMemo(() => {
    const n: [number, number, number][] = [];
    for (let i = 0; i < 18; i++) {
      n.push([
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3 - 1,
      ]);
    }
    const b: { pos: [number, number, number]; h: number }[] = [];
    for (let i = 0; i < 5; i++) {
      b.push({
        pos: [-1.2 + i * 0.12, -1.5, -1],
        h: 0.2 + Math.random() * 0.5,
      });
    }
    return { nodes: n, bars: b };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const target = -scrollY * 0.0008;
      groupRef.current.rotation.y += (target - groupRef.current.rotation.y) * 0.02;
      groupRef.current.position.y += (-scrollY * 0.0003 - groupRef.current.position.y) * 0.03;
    }
  });

  const colors = ['#3b82f6', '#06b6d4', '#8b5cf6', '#60a5fa'];

  return (
    <group ref={groupRef}>
      <ConnectionLines points={nodes} />
      {nodes.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
          <DataNode position={pos} color={colors[i % colors.length]} size={0.05 + Math.random() * 0.06} />
        </Float>
      ))}
      {bars.map((bar, i) => (
        <DataBar key={`bar-${i}`} position={bar.pos} height={bar.h} color={colors[i % colors.length]} />
      ))}
      <FloatingGrid />
    </group>
  );
}

export default function Background3D() {
  const isMobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none" style={{ zIndex: -5 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#3b82f6" />
        <pointLight position={[-5, -5, 3]} intensity={0.2} color="#06b6d4" />
        <ScrollScene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
