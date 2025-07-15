import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAMOND_SKETCH = {
  _style:
    'rhombus;whiteSpace=wrap;html=1;strokeWidth=2;fillWeight=-1;hachureGap=8;fillStyle=cross-hatch;fillColor=#006600;sketch=1;',
  _width: 120,
  _height: 60,
}

export function DiamondSketch(props: DiagramNodeProps) {
  return <Shape {...DIAMOND_SKETCH} {...props} />
}
