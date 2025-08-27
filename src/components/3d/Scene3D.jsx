import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PresentationControls, ContactShadows, Float } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import FloatingParticles from './FloatingParticles'
import InteractiveGeometry from './InteractiveGeometry'

function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1}
            color="#4ecdc4"
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Interactive Elements */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <InteractiveGeometry position={[-2, 1, 0]} />
          </Float>
          
          <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
            <InteractiveGeometry position={[2, -1, -1]} />
          </Float>
          
          <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
            <InteractiveGeometry position={[0, 2, -2]} />
          </Float>
          
          {/* Floating Particles */}
          <FloatingParticles count={1500} />
          
          {/* Ground Shadows */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={20} 
            blur={2} 
            far={4.5} 
          />
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          {/* Post Processing Effects */}
          <EffectComposer>
            <Bloom 
              intensity={0.3}
              luminanceThreshold={0.9}
              luminanceSmoothing={0.025}
            />
            <ChromaticAberration 
              blendFunction={BlendFunction.NORMAL}
              offset={[0.001, 0.001]}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D
