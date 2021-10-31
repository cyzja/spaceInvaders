import React from 'react'

import { ProgressBar } from '@monorepo/uikit'
import { Html, useProgress } from '@react-three/drei'

const Loader: React.FC = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <ProgressBar progress={progress} />
    </Html>
  )
}

export default Loader
