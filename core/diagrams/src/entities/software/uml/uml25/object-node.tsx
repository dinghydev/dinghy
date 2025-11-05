import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_NODE = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;rounded=0;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 90,
}

export function ObjectNode(props: NodeProps) {
  return (
    <Shape
      {...OBJECT_NODE}
      {...props}
      _style={extendStyle(OBJECT_NODE, props)}
    />
  )
}
