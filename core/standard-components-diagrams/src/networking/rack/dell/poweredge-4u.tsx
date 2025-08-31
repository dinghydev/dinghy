import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_4U = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.dell_poweredge_4u;',
  _width: 162,
  _height: 60,
}

export function Poweredge4u(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_4U}
      {...props}
      _style={extendStyle(POWEREDGE_4U, props)}
    />
  )
}
