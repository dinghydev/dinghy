import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_4 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;bottom=1;right=1;left=1;top=0;fillColor=none;routingCenterX=-0.5;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE_4}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE_4, props)}
    />
  )
}
