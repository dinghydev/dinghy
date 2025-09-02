import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIMMER_VARIABLE_CAPACITOR_US_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.variable_capacitor_2;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function TrimmerVariableCapacitorUs2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRIMMER_VARIABLE_CAPACITOR_US_2}
      {...props}
      _style={extendStyle(TRIMMER_VARIABLE_CAPACITOR_US_2, props)}
    />
  )
}
