import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMALL_KITCHEN_TABLE_3 = {
  _style: {
    entity: 'shape=rect;shadow=0;html=1;',
  },
  _original_width: 2,
  _original_height: 120,
}

export function SmallKitchenTable3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMALL_KITCHEN_TABLE_3}
      {...props}
      _style={extendStyle(SMALL_KITCHEN_TABLE_3, props)}
    />
  )
}
