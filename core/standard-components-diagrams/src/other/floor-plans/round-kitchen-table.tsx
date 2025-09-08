import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUND_KITCHEN_TABLE = {
  _style: {
    entity: 'shape=ellipse;shadow=0;html=1;',
  },
  _original_width: 4,
  _original_height: 140,
}

export function RoundKitchenTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROUND_KITCHEN_TABLE}
      {...props}
      _style={extendStyle(ROUND_KITCHEN_TABLE, props)}
    />
  )
}
