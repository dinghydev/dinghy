import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_FLOW_6 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=left;verticalAlign=top;endArrow=none;exitX=1;exitY=0.5;entryX=0;entryY=0.5;',
  },
  _original_width: 2,
  _original_height: 370,
}

export function ItemFlow6(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_6}
      {...props}
      _style={extendStyle(ITEM_FLOW_6, props)}
    />
  )
}
