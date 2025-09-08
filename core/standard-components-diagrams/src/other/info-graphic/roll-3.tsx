import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLL_3 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 2,
  _original_height: 400,
}

export function Roll3(props: DiagramNodeProps) {
  return <Shape {...ROLL_3} {...props} _style={extendStyle(ROLL_3, props)} />
}
