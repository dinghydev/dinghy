import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_5 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#BAC8D3;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 3,
  _height: 350,
}

export function Triangle5(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_5} {...props} _style={extendStyle(TRIANGLE_5, props)} />
  )
}
