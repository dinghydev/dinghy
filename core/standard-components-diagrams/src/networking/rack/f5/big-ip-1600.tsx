import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIG_IP_1600 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.big_ip_1600;',
  _width: 168,
  _height: 20,
}

export function BigIp1600(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIG_IP_1600}
      {...props}
      _style={extendStyle(BIG_IP_1600, props)}
    />
  )
}
