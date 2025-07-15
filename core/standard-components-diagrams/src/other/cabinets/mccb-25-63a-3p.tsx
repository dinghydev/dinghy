import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MCCB_25_63A_3P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_25_63a_3p;',
  _width: 60,
  _height: 90,
}

export function Mccb2563a3p(props: DiagramNodeProps) {
  return <Shape {...MCCB_25_63A_3P} {...props} />
}
