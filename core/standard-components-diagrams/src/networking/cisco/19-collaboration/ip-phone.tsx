import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IP_PHONE = {
  _style:
    'points=[[0.59,0,0],[0.87,0.015,0],[0.88,0.3,0],[0.99,0.99,0],[0.5,1,0],[0.01,0.99,0],[0.075,0.5,0],[0.17,0.115,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.ip_phone;fillColor=#005073;strokeColor=none;',
  _width: 57.49999999999999,
  _height: 50,
}

export function IpPhone(props: DiagramNodeProps) {
  return <Shape {...IP_PHONE} {...props} />
}
