import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGLE_2 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#F2931E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 0,
  _original_height: 350,
}

export function Triangle2(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_2} {...props} _style={extendStyle(TRIANGLE_2, props)} />
  )
}
