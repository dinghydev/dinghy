import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOSFET_P = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.mosfets1.p-channel_mosfet_1;',
  },
  _width: 95,
  _height: 100,
}

export function MosfetP(props: DiagramNodeProps) {
  return (
    <Shape {...MOSFET_P} {...props} _style={extendStyle(MOSFET_P, props)} />
  )
}
