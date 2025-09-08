import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MCCB_63_250A_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_63_250a_3p;',
  },
  _original_width: 70,
  _original_height: 105,
}

export function Mccb63250a3p(props: DiagramNodeProps) {
  return (
    <Shape
      {...MCCB_63_250A_3P}
      {...props}
      _style={extendStyle(MCCB_63_250A_3P, props)}
    />
  )
}
