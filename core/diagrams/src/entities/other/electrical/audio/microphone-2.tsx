import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROPHONE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.microphone_2;',
  },
  _width: 42,
  _height: 70,
}

export function Microphone2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MICROPHONE_2)} />
}
