import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAISED_BUTTON_NORMAL_3 = {
  _style:
    'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=none;strokeColor=none;fontStyle=1;shadow=0;',
  _width: 100,
  _height: 36,
}

export function RaisedButtonNormal3(props: DiagramNodeProps) {
  return <Shape {...RAISED_BUTTON_NORMAL_3} {...props} />
}
