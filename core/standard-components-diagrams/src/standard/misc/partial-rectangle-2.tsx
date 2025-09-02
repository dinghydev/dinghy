import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTIAL_RECTANGLE_2 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;top=0;fillColor=none;',
  },
  _original_width: 120,
  _original_height: 60,
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
