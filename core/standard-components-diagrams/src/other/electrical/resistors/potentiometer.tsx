import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POTENTIOMETER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.potentiometer_1;',
  _width: 100,
  _height: 40,
}

export function Potentiometer(props: DiagramNodeProps) {
  return <Shape {...POTENTIOMETER} {...props} />
}
