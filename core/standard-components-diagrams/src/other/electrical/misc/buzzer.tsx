import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUZZER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.radio.buzzer',
  _width: 80,
  _height: 50,
}

export function Buzzer(props: DiagramNodeProps) {
  return <Shape {...BUZZER} {...props} _style={extendStyle(BUZZER, props)} />
}
