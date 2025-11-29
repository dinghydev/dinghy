import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MCCB_25_63A_3P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_25_63a_3p;',
  },
  _width: 60,
  _height: 90,
}

export function Mccb2563a3p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MCCB_25_63A_3P)} />
}
