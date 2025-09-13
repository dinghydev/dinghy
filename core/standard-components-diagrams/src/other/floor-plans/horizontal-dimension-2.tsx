import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_DIMENSION_2 = {
  _style: {
    entity:
      'shape=dimension;direction=west;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=top;spacingTop=-15;labelBackgroundColor=none;',
  },
  _width: 100,
  _height: 40,
}

export function HorizontalDimension2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_DIMENSION_2}
      {...props}
      _style={extendStyle(HORIZONTAL_DIMENSION_2, props)}
    />
  )
}
