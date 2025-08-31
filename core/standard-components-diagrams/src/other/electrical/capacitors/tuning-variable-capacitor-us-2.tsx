import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TUNING_VARIABLE_CAPACITOR_US_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.trimmer_capacitor_2;',
  _width: 100,
  _height: 65.5,
}

export function TuningVariableCapacitorUs2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TUNING_VARIABLE_CAPACITOR_US_2}
      {...props}
      _style={extendStyle(TUNING_VARIABLE_CAPACITOR_US_2, props)}
    />
  )
}
