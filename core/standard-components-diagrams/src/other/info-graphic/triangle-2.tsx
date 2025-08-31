import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_2 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#F2931E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 0,
  _height: 350,
}

export function Triangle2(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_2} {...props} _style={extendStyle(TRIANGLE_2, props)} />
  )
}
