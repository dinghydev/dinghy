import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESISTOR_TRIMMER_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_resistor_2;',
  _width: 100,
  _height: 65.5,
}

export function ResistorTrimmer2(props: DiagramNodeProps) {
  return <Shape {...RESISTOR_TRIMMER_2} {...props} />
}
