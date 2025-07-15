import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAISED_BUTTON_NORMAL = {
  _style:
    'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#e0e0e0;strokeColor=none;fontStyle=1;shadow=1',
  _width: 100,
  _height: 36,
}

export function RaisedButtonNormal(props: DiagramNodeProps) {
  return <Shape {...RAISED_BUTTON_NORMAL} {...props} />
}
