import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLL_5 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#FCE7CD;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 4,
  _height: 400,
}

export function Roll5(props: DiagramNodeProps) {
  return <Shape {...ROLL_5} {...props} _style={extendStyle(ROLL_5, props)} />
}
