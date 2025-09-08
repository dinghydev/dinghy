import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_3 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=none;routingCenterX=-0.5;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function PartialRectangle3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE_3}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE_3, props)}
    />
  )
}
