import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTIAL_RECTANGLE_5 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=none;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function PartialRectangle5(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE_5}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE_5, props)}
    />
  )
}
