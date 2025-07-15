import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RAISED_BUTTON_HOVER_2 = {
  _style:
    'whiteSpace=wrap;html=1;dashed=0;align=center;fontSize=12;shape=rect;fillColor=#cccccc;opacity=15;strokeColor=none;fontStyle=1;fontColor=#ffffff;shadow=0;',
  _width: 100,
  _height: 36,
}

export function RaisedButtonHover2(props: DiagramNodeProps) {
  return <Shape {...RAISED_BUTTON_HOVER_2} {...props} />
}
