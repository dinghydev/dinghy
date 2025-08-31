import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_3 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#F8C382;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 1,
  _height: 350,
}

export function Triangle3(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_3} {...props} _style={extendStyle(TRIANGLE_3, props)} />
  )
}
