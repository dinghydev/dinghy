import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RECTANGLE_SKETCH = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=4;hachureGap=8;hachureAngle=45;fillColor=#1ba1e2;sketch=1;',
  _width: 120,
  _height: 60,
}

export function RectangleSketch(props: DiagramNodeProps) {
  return <Shape {...RECTANGLE_SKETCH} {...props} />
}
