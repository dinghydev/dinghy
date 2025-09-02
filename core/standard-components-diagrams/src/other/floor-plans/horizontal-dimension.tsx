import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_DIMENSION = {
  _style: {
    entity:
      'shape=dimension;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;spacingBottom=3;labelBackgroundColor=none;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function HorizontalDimension(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_DIMENSION}
      {...props}
      _style={extendStyle(HORIZONTAL_DIMENSION, props)}
    />
  )
}
