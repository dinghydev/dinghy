import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRIMMER_VARIABLE_CAPACITOR_US = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.variable_capacitor_1;',
  _width: 100,
  _height: 60,
}

export function TrimmerVariableCapacitorUs(props: DiagramNodeProps) {
  return <Shape {...TRIMMER_VARIABLE_CAPACITOR_US} {...props} />
}
