import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_DIMENSION = {
  _style:
    'shape=dimension;direction=north;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;labelBackgroundColor=none;horizontal=0;spacingBottom=3;',
  _width: 40,
  _height: 100,
}

export function VerticalDimension(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_DIMENSION} {...props} />
}
