import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor_1;',
  },
  _width: 100,
  _height: 20,
}

export function Resistor(props: DiagramNodeProps) {
  return (
    <Shape {...RESISTOR} {...props} _style={extendStyle(RESISTOR, props)} />
  )
}
