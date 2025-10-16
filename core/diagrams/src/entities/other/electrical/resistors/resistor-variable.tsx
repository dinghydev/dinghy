import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR_VARIABLE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.variable_resistor_1;',
  },
  _width: 100,
  _height: 60,
}

export function ResistorVariable(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_VARIABLE}
      {...props}
      _style={extendStyle(RESISTOR_VARIABLE, props)}
    />
  )
}
