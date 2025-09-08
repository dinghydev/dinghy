import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const P_CHANNEL_JFET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.p-channel_jfet_1;',
  },
  _original_width: 95,
  _original_height: 100,
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
