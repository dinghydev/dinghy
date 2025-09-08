import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TARGET_3 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#FCE7CD;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 2,
  _original_height: 350,
}

export function Target3(props: DiagramNodeProps) {
  return (
    <Shape {...TARGET_3} {...props} _style={extendStyle(TARGET_3, props)} />
  )
}
