import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELLIPSE_SKETCH = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=2;hachureGap=8;fillColor=#990000;fillStyle=dots;sketch=1;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function EllipseSketch(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELLIPSE_SKETCH}
      {...props}
      _style={extendStyle(ELLIPSE_SKETCH, props)}
    />
  )
}
