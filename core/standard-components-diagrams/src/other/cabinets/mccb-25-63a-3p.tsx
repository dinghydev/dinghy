import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MCCB_25_63A_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_25_63a_3p;',
  },
  _original_width: 60,
  _original_height: 90,
}

export function Mccb2563a3p(props: DiagramNodeProps) {
  return (
    <Shape
      {...MCCB_25_63A_3P}
      {...props}
      _style={extendStyle(MCCB_25_63A_3P, props)}
    />
  )
}
