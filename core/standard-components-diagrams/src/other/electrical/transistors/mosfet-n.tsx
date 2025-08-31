import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOSFET_N = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.n-channel_mosfet_1;',
  _width: 95,
  _height: 100,
}

export function MosfetN(props: DiagramNodeProps) {
  return (
    <Shape {...MOSFET_N} {...props} _style={extendStyle(MOSFET_N, props)} />
  )
}
