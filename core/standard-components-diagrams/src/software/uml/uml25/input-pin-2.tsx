import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INPUT_PIN_2 = {
  _style:
    'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];strokeColor=#ffffff;fillColor=#000000;',
  _width: 30,
  _height: 30,
}

export function InputPin2(props: DiagramNodeProps) {
  return <Shape {...INPUT_PIN_2} {...props} />
}
