import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_DIMENSION = {
  _style:
    'shape=dimension;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;spacingBottom=3;labelBackgroundColor=none;',
  _width: 100,
  _height: 40,
}

export function HorizontalDimension(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_DIMENSION} {...props} />
}
