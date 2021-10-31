import React from 'react'

export const createIcon = (icon: React.ReactElement) => {
  const Icon = (props: React.SVGProps<SVGSVGElement>, ref: React.LegacyRef<SVGSVGElement>) =>
    React.cloneElement(icon, { ...props, ref: ref })

  return React.memo(React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(Icon))
}
