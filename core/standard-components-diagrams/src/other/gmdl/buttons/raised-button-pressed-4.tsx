import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAISED_BUTTON_PRESSED_4 = {
  _style:
    'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;opacity=26;strokeColor=none;fontStyle=1;opacity=12;fontColor=#BDBDBD;shadow=0;',
  _width: 100,
  _height: 36,
}

export function RaisedButtonPressed4(props: DiagramNodeProps) {
  return <Shape {...RAISED_BUTTON_PRESSED_4} {...props} />
}
