import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/couch/couch.gltf')

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      {/* <directionalLight position={[3.3, 1.0, 4.4]} castShadow /> */}
      <Environment
        preset="apartment"
        background
        ground={{
          height: 10,
          radius: 115,
          scale: 100
        }}
      />
      <primitive object={gltf.scene} position={[0, 1, 0]} />
      <primitive
        object={gltf.scene}
        position={[0, 0.6, 0]}
        scale={[0.01, 0.01, 0.01]}
        children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
