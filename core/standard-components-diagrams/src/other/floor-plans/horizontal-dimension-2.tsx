import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_DIMENSION_2 = {
  _style:
    'shape=dimension;direction=west;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=top;spacingTop=-15;labelBackgroundColor=none;',
  _width: 100,
  _height: 40,
}

export function HorizontalDimension2(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_DIMENSION_2} {...props} />
}
