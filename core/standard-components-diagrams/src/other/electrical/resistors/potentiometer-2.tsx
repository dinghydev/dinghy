import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POTENTIOMETER_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.potentiometer_2;',
  _width: 100,
  _height: 40,
}

export function Potentiometer2(props: DiagramNodeProps) {
  return <Shape {...POTENTIOMETER_2} {...props} />
}
