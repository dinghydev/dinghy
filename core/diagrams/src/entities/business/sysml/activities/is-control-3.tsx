import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IS_CONTROL_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;verticalAlign=bottom;entryX=0;entryY=0.5;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function IsControl3(props: DiagramNodeProps) {
  return (
    <Shape
      {...IS_CONTROL_3}
      {...props}
      _style={extendStyle(IS_CONTROL_3, props)}
    />
  )
}
