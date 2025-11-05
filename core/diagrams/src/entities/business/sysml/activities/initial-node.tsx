import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INITIAL_NODE = {
  _style: {
    entity:
      'shape=ellipse;html=1;fillColor=strokeColor;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;perimeter=ellipsePerimeter;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function InitialNode(props: NodeProps) {
  return (
    <Shape
      {...INITIAL_NODE}
      {...props}
      _style={extendStyle(INITIAL_NODE, props)}
    />
  )
}
