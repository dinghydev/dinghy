import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELLIPSE_SKETCH = {
  _style:
    'ellipse;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=2;hachureGap=8;fillColor=#990000;fillStyle=dots;sketch=1;',
  _width: 120,
  _height: 60,
}

export function EllipseSketch(props: DiagramNodeProps) {
  return <Shape {...ELLIPSE_SKETCH} {...props} />
}
