import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_4 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=none;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle4(props: NodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE_4}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE_4, props)}
    />
  )
}
