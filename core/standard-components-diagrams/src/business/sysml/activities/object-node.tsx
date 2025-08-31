import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_NODE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
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
