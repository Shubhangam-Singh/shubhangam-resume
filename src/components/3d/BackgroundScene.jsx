import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function SubtleParticles() {
  const points = useRef()
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
      
      // Very gentle floating
      const positions = points.current.geometry.attributes.position.array
      for (let i = 0; i < 800; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.001
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  // Create subtle white particles
  const particleCount = 800
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02}
        color="white"
        transparent 
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <SubtleParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default BackgroundScene
