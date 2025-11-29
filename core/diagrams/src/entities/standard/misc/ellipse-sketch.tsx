import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELLIPSE_SKETCH = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=2;hachureGap=8;fillColor=#990000;fillStyle=dots;sketch=1;',
  },
  _width: 120,
  _height: 60,
}

export function EllipseSketch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELLIPSE_SKETCH)} />
}
