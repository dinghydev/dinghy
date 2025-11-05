import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=right;endArrow=none;exitX=0.5;exitY=1;entryX=0.5;entryY=0;',
  },
  _width: 2,
  _height: 180,
}

export function ItemFlow3(props: NodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_3}
      {...props}
      _style={extendStyle(ITEM_FLOW_3, props)}
    />
  )
}
