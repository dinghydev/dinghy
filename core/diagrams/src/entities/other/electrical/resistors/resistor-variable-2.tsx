import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESISTOR_VARIABLE_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.variable_resistor_2;',
  },
  _width: 100,
  _height: 60,
}

export function ResistorVariable2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESISTOR_VARIABLE_2)} />
}
