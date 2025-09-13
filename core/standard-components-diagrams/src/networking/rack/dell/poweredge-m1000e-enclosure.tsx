import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWEREDGE_M1000E_ENCLOSURE = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m1000e_enclosure;',
  },
  _width: 162,
  _height: 150,
}

export function PoweredgeM1000eEnclosure(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_M1000E_ENCLOSURE}
      {...props}
      _style={extendStyle(POWEREDGE_M1000E_ENCLOSURE, props)}
    />
  )
}
