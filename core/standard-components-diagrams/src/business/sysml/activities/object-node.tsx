import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_NODE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 80,
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
