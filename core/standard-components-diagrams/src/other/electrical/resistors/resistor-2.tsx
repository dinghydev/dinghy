import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESISTOR_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor_2;',
  },
  _original_width: 100,
  _original_height: 20,
}

export function Resistor2(props: DiagramNodeProps) {
  return (
    <Shape {...RESISTOR_2} {...props} _style={extendStyle(RESISTOR_2, props)} />
  )
}
