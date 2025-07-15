import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_UPS5000_HV = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_ups5000_hv;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 45,
}

export function IbmUps5000Hv(props: DiagramNodeProps) {
  return <Shape {...IBM_UPS5000_HV} {...props} />
}
