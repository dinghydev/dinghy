import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAMOND_SKETCH = {
  _style: {
    entity:
      'rhombus;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=-1;hachureGap=8;fillStyle=cross-hatch;fillColor=#006600;sketch=1;',
  },
  _width: 120,
  _height: 60,
}

export function DiamondSketch(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAMOND_SKETCH}
      {...props}
      _style={extendStyle(DIAMOND_SKETCH, props)}
    />
  )
}
