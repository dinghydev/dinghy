import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAGNETORESISTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.magnetoresistor;',
  _width: 100,
  _height: 60,
}

export function Magnetoresistor(props: DiagramNodeProps) {
  return <Shape {...MAGNETORESISTOR} {...props} />
}
