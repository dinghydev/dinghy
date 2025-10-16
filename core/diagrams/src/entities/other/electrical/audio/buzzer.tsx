import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUZZER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.buzzer;',
  },
  _original_width: 45,
  _original_height: 60,
}

export function Buzzer(props: DiagramNodeProps) {
  return <Shape {...BUZZER} {...props} _style={extendStyle(BUZZER, props)} />
}
