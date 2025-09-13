import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_2 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=none;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE_2}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE_2, props)}
    />
  )
}
