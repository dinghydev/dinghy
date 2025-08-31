import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_7 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#2F5B7C;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 5,
  _height: 350,
}

export function Triangle7(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_7} {...props} _style={extendStyle(TRIANGLE_7, props)} />
  )
}
