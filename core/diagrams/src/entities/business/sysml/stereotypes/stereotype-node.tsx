import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_NODE = {
  _style: {
    entity: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function StereotypeNode(props: NodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NODE}
      {...props}
      _style={extendStyle(STEREOTYPE_NODE, props)}
    />
  )
}
