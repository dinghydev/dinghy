import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MICROPHONE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.microphone_2;',
  },
  _original_width: 42,
  _original_height: 70,
}

export function Microphone2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MICROPHONE_2}
      {...props}
      _style={extendStyle(MICROPHONE_2, props)}
    />
  )
}
