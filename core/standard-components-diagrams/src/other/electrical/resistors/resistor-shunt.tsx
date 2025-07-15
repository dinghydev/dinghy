import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESISTOR_SHUNT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor,_shunt;',
  _width: 100,
  _height: 45,
}

export function ResistorShunt(props: DiagramNodeProps) {
  return <Shape {...RESISTOR_SHUNT} {...props} />
}
