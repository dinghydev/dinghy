import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESISTOR_TAPPED = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.tapped_resistor;',
  },
  _width: 100,
  _height: 40,
}

export function ResistorTapped(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESISTOR_TAPPED}
      {...props}
      _style={extendStyle(RESISTOR_TAPPED, props)}
    />
  )
}
