import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWEREDGE_1U = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.dell_poweredge_1u;',
  },
  _width: 162,
  _height: 15,
}

export function Poweredge1u(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_1U}
      {...props}
      _style={extendStyle(POWEREDGE_1U, props)}
    />
  )
}
