import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUZZER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.buzzer;',
  _width: 45,
  _height: 60,
}

export function Buzzer(props: DiagramNodeProps) {
  return <Shape {...BUZZER} {...props} _style={extendStyle(BUZZER, props)} />
}
