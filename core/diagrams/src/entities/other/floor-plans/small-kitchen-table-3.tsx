import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SMALL_KITCHEN_TABLE_3 = {
  _style: {
    entity: 'shape=rect;shadow=0;html=1;',
  },
  _width: 2,
  _height: 120,
}

export function SmallKitchenTable3(props: NodeProps) {
  return (
    <Shape
      {...SMALL_KITCHEN_TABLE_3}
      {...props}
      _style={extendStyle(SMALL_KITCHEN_TABLE_3, props)}
    />
  )
}
