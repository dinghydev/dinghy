import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLL_7 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F5AB50;strokeColor=none;shadow=0;fontSize=20;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 6,
  _original_height: 400,
}

export function Roll7(props: DiagramNodeProps) {
  return <Shape {...ROLL_7} {...props} _style={extendStyle(ROLL_7, props)} />
}
