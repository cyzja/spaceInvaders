import React, { memo, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  type?: string
}

const Portal: React.FC<PortalProps> = ({ children = false, type = 'modal-portal' }) => {
  const mountNode = React.useRef<HTMLDivElement | null>(null)
  const portalNode = React.useRef<HTMLElement | null>(null)
  const [, setRefresh] = useState<number>(0)

  useLayoutEffect(() => {
    if (!mountNode.current) return
    const { ownerDocument } = mountNode.current
    portalNode.current = ownerDocument?.createElement(type)
    ownerDocument.body.appendChild(portalNode.current)
    ownerDocument.body.style.overflow = 'hidden'
    setRefresh((prevState) => prevState + 1)
    return () => {
      ownerDocument.body.style.overflow = ''
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current)
      }
    }
  }, [type, setRefresh])

  return portalNode.current ? createPortal(children, portalNode.current) : <span ref={mountNode} />
}

export default memo(Portal)
