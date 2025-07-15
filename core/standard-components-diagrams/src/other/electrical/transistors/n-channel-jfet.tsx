import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const N_CHANNEL_JFET = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.n-channel_jfet_1;',
  _width: 95,
  _height: 100,
}

export function NChannelJfet(props: DiagramNodeProps) {
  return <Shape {...N_CHANNEL_JFET} {...props} />
}
