import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POWEREDGE_R940 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r940;',
  _width: 162,
  _height: 45,
}

export function PoweredgeR940(props: DiagramNodeProps) {
  return <Shape {...POWEREDGE_R940} {...props} />
}
