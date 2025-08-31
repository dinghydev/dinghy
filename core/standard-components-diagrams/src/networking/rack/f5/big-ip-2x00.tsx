import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIG_IP_2X00 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.big_ip_2x00;',
  },
  _width: 168,
  _height: 20,
}

export function BigIp2x00(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIG_IP_2X00}
      {...props}
      _style={extendStyle(BIG_IP_2X00, props)}
    />
  )
}
