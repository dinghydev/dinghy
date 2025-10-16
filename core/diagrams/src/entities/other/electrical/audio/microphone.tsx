import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MICROPHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.microphone_1;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Microphone(props: DiagramNodeProps) {
  return (
    <Shape {...MICROPHONE} {...props} _style={extendStyle(MICROPHONE, props)} />
  )
}
