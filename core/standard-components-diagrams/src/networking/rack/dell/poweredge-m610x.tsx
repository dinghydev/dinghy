import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWEREDGE_M610X = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m610x;',
  _width: 20,
  _height: 37,
}

export function PoweredgeM610x(props: DiagramNodeProps) {
  return <Shape {...POWEREDGE_M610X} {...props} />
}
