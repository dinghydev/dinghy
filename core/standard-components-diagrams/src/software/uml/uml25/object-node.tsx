import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_NODE = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;rounded=0;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 90,
}

export function ObjectNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_NODE}
      {...props}
      _style={extendStyle(OBJECT_NODE, props)}
    />
  )
}
