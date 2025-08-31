import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_DIMENSION = {
  _style: {
    entity:
      'shape=dimension;direction=north;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;labelBackgroundColor=none;horizontal=0;spacingBottom=3;',
  },
  _width: 40,
  _height: 100,
}

export function VerticalDimension(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_DIMENSION}
      {...props}
      _style={extendStyle(VERTICAL_DIMENSION, props)}
    />
  )
}
