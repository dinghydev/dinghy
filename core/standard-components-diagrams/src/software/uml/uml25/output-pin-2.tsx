import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTPUT_PIN_2 = {
  _style:
    'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];strokeColor=#ffffff;fillColor=#000000;flipH=1;',
  _width: 30,
  _height: 30,
}

export function OutputPin2(props: DiagramNodeProps) {
  return <Shape {...OUTPUT_PIN_2} {...props} />
}
