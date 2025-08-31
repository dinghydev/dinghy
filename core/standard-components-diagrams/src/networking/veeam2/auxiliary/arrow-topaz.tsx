import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_TOPAZ = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#00B336;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=block;endFill=1;startArrow=none;',
  },
}

export function ArrowTopaz(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ARROW_TOPAZ}
      {...props}
      _style={extendStyle(ARROW_TOPAZ, props)}
    />
  )
}
