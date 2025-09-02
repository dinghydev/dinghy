import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTO_TRANSISTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.opto-transistor;',
  },
  _original_width: 100,
  _original_height: 110,
}

export function OptoTransistor(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTO_TRANSISTOR}
      {...props}
      _style={extendStyle(OPTO_TRANSISTOR, props)}
    />
  )
}
