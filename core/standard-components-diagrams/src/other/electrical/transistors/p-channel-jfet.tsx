import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const P_CHANNEL_JFET = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.p-channel_jfet_1;',
  _width: 95,
  _height: 100,
}

export function PChannelJfet(props: DiagramNodeProps) {
  return (
    <Shape
      {...P_CHANNEL_JFET}
      {...props}
      _style={extendStyle(P_CHANNEL_JFET, props)}
    />
  )
}
