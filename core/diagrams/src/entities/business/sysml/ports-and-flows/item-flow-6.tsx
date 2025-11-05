import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_6 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=left;verticalAlign=top;endArrow=none;exitX=1;exitY=0.5;entryX=0;entryY=0.5;',
  },
  _width: 2,
  _height: 370,
}

export function ItemFlow6(props: NodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_6}
      {...props}
      _style={extendStyle(ITEM_FLOW_6, props)}
    />
  )
}
