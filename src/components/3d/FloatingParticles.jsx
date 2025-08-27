import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingParticles({ count = 2000 }) {
  const meshRef = useRef()
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      // Gradient colors from purple to cyan
      const color = new THREE.Color()
      color.setHSL((i / count) * 0.3 + 0.6, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [count])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
      
      // Animate particles floating
      const positions = meshRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={meshRef} positions={positions} colors={colors}>
      <PointMaterial 
        size={0.02}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default FloatingParticles
