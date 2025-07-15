import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIG_IP_10X00 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.big_ip_10x00;',
  _width: 168,
  _height: 40,
}

export function BigIp10x00(props: DiagramNodeProps) {
  return <Shape {...BIG_IP_10X00} {...props} />
}
