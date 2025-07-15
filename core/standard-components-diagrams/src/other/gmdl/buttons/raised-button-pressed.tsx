import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAISED_BUTTON_PRESSED = {
  _style:
    'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#000000;strokeColor=none;fontStyle=1;opacity=12;fontColor=#BDBDBD;',
  _width: 100,
  _height: 36,
}

export function RaisedButtonPressed(props: DiagramNodeProps) {
  return <Shape {...RAISED_BUTTON_PRESSED} {...props} />
}
