import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={(e) => setRotate(!rotate)} // toggle rotation on click
      onPointerUp={(e) => console.log('pointer up ' + e.object.name)}
      onPointerOver={(e) => console.log('pointer over ' + e.object.name)}
      onPointerOut={(e) => console.log('pointer out ' + e.object.name)}
      onUpdate={(self) => console.log(self)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}
