import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUNING_VARIABLE_CAPACITOR_US = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.trimmer_capacitor_1;',
  _width: 100,
  _height: 65.5,
}

export function TuningVariableCapacitorUs(props: DiagramNodeProps) {
  return <Shape {...TUNING_VARIABLE_CAPACITOR_US} {...props} />
}
