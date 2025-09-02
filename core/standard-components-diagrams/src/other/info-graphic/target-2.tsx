import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TARGET_2 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#F8C382;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _original_width: 1,
  _original_height: 350,
}

export function Target2(props: DiagramNodeProps) {
  return (
    <Shape {...TARGET_2} {...props} _style={extendStyle(TARGET_2, props)} />
  )
}
