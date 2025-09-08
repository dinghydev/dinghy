import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR_SHUNT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.resistor,_shunt;',
  },
  _original_width: 100,
  _original_height: 45,
}

export function ResistorShunt(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_SHUNT}
      {...props}
      _style={extendStyle(RESISTOR_SHUNT, props)}
    />
  )
}
