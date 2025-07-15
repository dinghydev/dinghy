import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THERMOCOUPLE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermocouple;',
  _width: 80,
  _height: 81,
}

export function Thermocouple(props: DiagramNodeProps) {
  return <Shape {...THERMOCOUPLE} {...props} />
}
