import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOTTED_LINE_TOPAZ = {
  _style: {
    dependency:
      'edgeStyle=none;rounded=0;html=1;entryX=0;entryY=0.5;jettySize=auto;orthogonalLoop=1;strokeColor=#00B336;strokeWidth=2;fontColor=#000000;jumpStyle=none;endArrow=none;endFill=0;startArrow=none;dashed=1;',
  },
}

export function DottedLineTopaz(props: NodeProps) {
  return (
    <Dependency
      {...DOTTED_LINE_TOPAZ}
      {...props}
      _style={extendStyle(DOTTED_LINE_TOPAZ, props)}
    />
  )
}
