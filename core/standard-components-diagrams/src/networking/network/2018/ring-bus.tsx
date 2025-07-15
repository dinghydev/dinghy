import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RING_BUS = {
  _style:
    'html=1;fillColor=#CCCCCC;strokeColor=#6881B3;shape=ellipse;perimeter=ellipsePerimeter;gradientColor=none;gradientDirection=north;fontColor=#ffffff;strokeWidth=2;',
  _width: 100,
  _height: 100,
}

export function RingBus(props: DiagramNodeProps) {
  return <Shape {...RING_BUS} {...props} />
}
