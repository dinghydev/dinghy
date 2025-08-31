import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MCCB_25_63A_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_25_63a_3p;',
  },
  _width: 60,
  _height: 90,
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
