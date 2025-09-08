import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR_VARIABLE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.variable_resistor_2;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function ResistorVariable2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_VARIABLE_2}
      {...props}
      _style={extendStyle(RESISTOR_VARIABLE_2, props)}
    />
  )
}
