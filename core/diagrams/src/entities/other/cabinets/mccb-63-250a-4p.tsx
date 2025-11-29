import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MCCB_63_250A_4P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.mccb_63_250a_4p;',
  },
  _width: 95,
  _height: 105,
}

export function Mccb63250a4p(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MCCB_63_250A_4P)} />
}
