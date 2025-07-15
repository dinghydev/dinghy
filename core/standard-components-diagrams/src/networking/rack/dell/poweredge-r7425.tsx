import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWEREDGE_R7425 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r7425;',
  _width: 162,
  _height: 30,
}

export function PoweredgeR7425(props: DiagramNodeProps) {
  return <Shape {...POWEREDGE_R7425} {...props} />
}
