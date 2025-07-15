import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STOP_STATE = {
  _style:
    'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;strokeWidth=5;perimeter=ellipsePerimeter;',
  _width: 60,
  _height: 60,
}

export function StopState(props: DiagramNodeProps) {
  return <Shape {...STOP_STATE} {...props} />
}
