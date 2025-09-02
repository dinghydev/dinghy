import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRIANGLE_8 = {
  _style: {
    entity:
      'triangle;direction=north;html=1;strokeWidth=4;fillColor=#23445D;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 6,
  _original_height: 350,
}

export function Triangle8(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE_8} {...props} _style={extendStyle(TRIANGLE_8, props)} />
  )
}
