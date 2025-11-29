import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RELATIONSHIP = {
  _style: {
    entity:
      'shape=rhombus;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 120,
  _height: 60,
}

export function Relationship(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RELATIONSHIP)} />
}
