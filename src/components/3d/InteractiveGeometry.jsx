import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'

function InteractiveGeometry({ position = [0, 0, 0] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  const { viewport } = useThree()
  
  const { scale, color } = useSpring({
    scale: hovered ? 1.2 : clicked ? 0.8 : 1,
    color: hovered ? '#ff6b6b' : clicked ? '#4ecdc4' : '#45b7d1',
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      
      // Follow mouse
      meshRef.current.rotation.x = (state.mouse.y * viewport.height) / 50
      meshRef.current.rotation.y = (state.mouse.x * viewport.width) / 50
    }
  })

  return (
    <a.mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </a.mesh>
  )
}

export default InteractiveGeometry
