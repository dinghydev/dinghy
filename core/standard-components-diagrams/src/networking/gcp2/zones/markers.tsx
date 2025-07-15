import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKERS = {
  _style:
    'shape=ellipse;perimeter=ellipsePerimeter;fillColor=#ffffff;strokeColor=#BDBDBD;strokeWidth=2;shadow=0;gradientColor=none;fontColor=#757575;align=center;html=1;fontStyle=1;spacingTop=-1;',
  _width: 0,
  _height: 50,
}

export function Markers(props: DiagramNodeProps) {
  return <Shape {...MARKERS} {...props} />
}
