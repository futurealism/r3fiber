import { Canvas } from '@react-three/fiber'
import Box from './Box'
// Note: in order to export without the curl braces, must use the default keyword

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box />
    </Canvas>
  )
}
