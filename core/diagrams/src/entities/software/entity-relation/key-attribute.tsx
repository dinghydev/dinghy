import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEY_ATTRIBUTE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;align=center;fontStyle=4;',
  },
  _width: 100,
  _height: 40,
}

export function KeyAttribute(props: NodeProps) {
  return (
    <Shape
      {...KEY_ATTRIBUTE}
      {...props}
      _style={extendStyle(KEY_ATTRIBUTE, props)}
    />
  )
}
