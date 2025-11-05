import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_NODE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/generic_node.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 49,
}

export function GenericNode(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_NODE}
      {...props}
      _style={extendStyle(GENERIC_NODE, props)}
    />
  )
}
