import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RECTANGLE_SKETCH = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=4;hachureGap=8;hachureAngle=45;fillColor=#1ba1e2;sketch=1;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function RectangleSketch(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECTANGLE_SKETCH}
      {...props}
      _style={extendStyle(RECTANGLE_SKETCH, props)}
    />
  )
}
