import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLL = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 0,
  _original_height: 400,
}

export function Roll(props: DiagramNodeProps) {
  return <Shape {...ROLL} {...props} _style={extendStyle(ROLL, props)} />
}
