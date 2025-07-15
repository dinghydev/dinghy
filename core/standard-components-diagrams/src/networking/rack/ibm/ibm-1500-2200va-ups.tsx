import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_1500_2200VA_UPS = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_1500-2200va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function Ibm15002200vaUps(props: DiagramNodeProps) {
  return <Shape {...IBM_1500_2200VA_UPS} {...props} />
}
