import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUZZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.buzzer',
  },
  _width: 80,
  _height: 50,
}

export function Buzzer(props: NodeProps) {
  return <Shape {...BUZZER} {...props} _style={extendStyle(BUZZER, props)} />
}
