import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBM_6000VA_UPS = {
  _style:
    'shape=mxgraph.rack.ibm.ibm_6000va_ups;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 60,
}

export function Ibm6000vaUps(props: DiagramNodeProps) {
  return <Shape {...IBM_6000VA_UPS} {...props} />
}
