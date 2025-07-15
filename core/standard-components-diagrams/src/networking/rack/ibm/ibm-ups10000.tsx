import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_UPS10000 = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_ups10000;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 89,
}

export function IbmUps10000(props: DiagramNodeProps) {
  return <Shape {...IBM_UPS10000} {...props} />
}
