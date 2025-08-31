import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STRUCTURED_ACTIVITY_NODE = {
  _style:
    'shape=rect;html=1;rounded=1;dashed=1;strokeWidth=2;verticalAlign=top;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 60,
}

export function StructuredActivityNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...STRUCTURED_ACTIVITY_NODE}
      {...props}
      _style={extendStyle(STRUCTURED_ACTIVITY_NODE, props)}
    />
  )
}
