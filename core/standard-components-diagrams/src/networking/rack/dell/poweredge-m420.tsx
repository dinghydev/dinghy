import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWEREDGE_M420 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m420;',
  _width: 20,
  _height: 37,
}

export function PoweredgeM420(props: DiagramNodeProps) {
  return <Shape {...POWEREDGE_M420} {...props} />
}
