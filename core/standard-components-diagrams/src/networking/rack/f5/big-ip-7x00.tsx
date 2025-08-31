import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIG_IP_7X00 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.big_ip_7x00;',
  },
  _width: 168,
  _height: 40,
}

export function BigIp7x00(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIG_IP_7X00}
      {...props}
      _style={extendStyle(BIG_IP_7X00, props)}
    />
  )
}
