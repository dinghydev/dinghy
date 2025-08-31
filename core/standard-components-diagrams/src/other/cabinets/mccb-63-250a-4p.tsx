import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MCCB_63_250A_4P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_63_250a_4p;',
  _width: 95,
  _height: 105,
}

export function Mccb63250a4p(props: DiagramNodeProps) {
  return (
    <Shape
      {...MCCB_63_250A_4P}
      {...props}
      _style={extendStyle(MCCB_63_250A_4P, props)}
    />
  )
}
