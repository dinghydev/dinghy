import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTPUT_PIN = {
  _style:
    'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];flipH=1;',
  _width: 30,
  _height: 30,
}

export function OutputPin(props: DiagramNodeProps) {
  return <Shape {...OUTPUT_PIN} {...props} />
}
