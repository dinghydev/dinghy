import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNING_VARIABLE_CAPACITOR_US = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.trimmer_capacitor_1;',
  },
  _original_width: 100,
  _original_height: 65.5,
}

export function TuningVariableCapacitorUs(props: DiagramNodeProps) {
  return (
    <Shape
      {...TUNING_VARIABLE_CAPACITOR_US}
      {...props}
      _style={extendStyle(TUNING_VARIABLE_CAPACITOR_US, props)}
    />
  )
}
