import React from 'react'
import * as THREE from 'three'

const StatusText: React.FC = () => {
  const text = new THREE.TextGeometry('Game Over', {})

  return <mesh position={[0, 0, 0]}> {text}</mesh>
}

export default StatusText
