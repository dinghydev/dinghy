import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_6 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#5D7F99;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 4,
  _height: 350,
}

export function Triangle6(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_6} {...props} _style={extendStyle(TRIANGLE_6, props)} />
  )
}
