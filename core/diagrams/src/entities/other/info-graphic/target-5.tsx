import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TARGET_5 = {
  _style: {
    entity:
      'ellipse;html=1;strokeWidth=4;fillColor=#5D7F99;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 4,
  _height: 350,
}

export function Target5(props: DiagramNodeProps) {
  return (
    <Shape {...TARGET_5} {...props} _style={extendStyle(TARGET_5, props)} />
  )
}
