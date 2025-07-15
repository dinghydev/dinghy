import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA = {
  _style:
    'shape=parallelogram;html=1;strokeWidth=2;perimeter=parallelogramPerimeter;whiteSpace=wrap;rounded=1;arcSize=12;size=0.23;',
  _width: 100,
  _height: 60,
}

export function Data(props: DiagramNodeProps) {
  return <Shape {...DATA} {...props} />
}
