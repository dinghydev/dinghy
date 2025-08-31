import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_C4140 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_c4140;',
  _width: 162,
  _height: 15,
}

export function PoweredgeC4140(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_C4140}
      {...props}
      _style={extendStyle(POWEREDGE_C4140, props)}
    />
  )
}
