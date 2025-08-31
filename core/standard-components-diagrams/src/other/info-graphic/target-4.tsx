import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TARGET_4 = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#BAC8D3;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 3,
  _height: 350,
}

export function Target4(props: DiagramNodeProps) {
  return (
    <Shape {...TARGET_4} {...props} _style={extendStyle(TARGET_4, props)} />
  )
}
