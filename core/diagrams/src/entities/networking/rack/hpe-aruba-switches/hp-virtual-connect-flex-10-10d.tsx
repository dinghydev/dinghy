import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HP_VIRTUAL_CONNECT_FLEX_10_10D = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_virtual_connect_flex-10-10d;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function HpVirtualConnectFlex1010d(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_VIRTUAL_CONNECT_FLEX_10_10D}
      {...props}
      _style={extendStyle(HP_VIRTUAL_CONNECT_FLEX_10_10D, props)}
    />
  )
}
