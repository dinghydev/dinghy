import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_ROUTING_BANK = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.horRoutingBank;',
  },
  _width: 160,
  _height: 20,
}

export function HorizontalRoutingBank(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_ROUTING_BANK}
      {...props}
      _style={extendStyle(HORIZONTAL_ROUTING_BANK, props)}
    />
  )
}
