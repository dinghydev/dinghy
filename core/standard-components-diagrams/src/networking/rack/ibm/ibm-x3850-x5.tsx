import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_X3850_X5 = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_x3850_x5;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 60,
}

export function IbmX3850X5(props: DiagramNodeProps) {
  return <Shape {...IBM_X3850_X5} {...props} />
}
