import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_7 = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 3,
  _height: 370,
}

export function ItemFlow7(props: NodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_7}
      {...props}
      _style={extendStyle(ITEM_FLOW_7, props)}
    />
  )
}
