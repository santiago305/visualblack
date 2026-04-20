import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 80;

function createSeededGenerator(seed: number) {
  let current = seed;

  return () => {
    current = (current * 1664525 + 1013904223) % 4294967296;
    return current / 4294967296;
  };
}

function createParticlePositions(count: number, seed: number) {
  const random = createSeededGenerator(seed);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (random() - 0.5) * 10;
    positions[i * 3 + 1] = (random() - 0.5) * 10;
    positions[i * 3 + 2] = (random() - 0.5) * 10;
  }

  return positions;
}

const PARTICLE_POSITIONS = createParticlePositions(PARTICLE_COUNT, 42);

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          wireframe
          distort={0.3}
          speed={2}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#666" sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <AnimatedSphere />
        <FloatingRing position={[3, 1, -2]} scale={0.8} />
        <FloatingRing position={[-2.5, -1.5, -1]} scale={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroScene;
