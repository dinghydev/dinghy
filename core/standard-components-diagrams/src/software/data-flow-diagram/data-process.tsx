import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_PROCESS = {
  _style:
    'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;perimeter=ellipsePerimeter;',
  _width: 30,
  _height: 30,
}

export function DataProcess(props: DiagramNodeProps) {
  return <Shape {...DATA_PROCESS} {...props} />
}
