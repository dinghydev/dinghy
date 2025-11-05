import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const N_CHANNEL_JFET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.n-channel_jfet_1;',
  },
  _original_width: 95,
  _original_height: 100,
}

export function NChannelJfet(props: NodeProps) {
  return (
    <Shape
      {...N_CHANNEL_JFET}
      {...props}
      _style={extendStyle(N_CHANNEL_JFET, props)}
    />
  )
}
