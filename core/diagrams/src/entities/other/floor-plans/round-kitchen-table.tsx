import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUND_KITCHEN_TABLE = {
  _style: {
    entity: 'shape=ellipse;shadow=0;html=1;',
  },
  _width: 4,
  _height: 140,
}

export function RoundKitchenTable(props: NodeProps) {
  return (
    <Shape
      {...ROUND_KITCHEN_TABLE}
      {...props}
      _style={extendStyle(ROUND_KITCHEN_TABLE, props)}
    />
  )
}
