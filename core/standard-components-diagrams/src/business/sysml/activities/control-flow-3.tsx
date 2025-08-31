import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_FLOW_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;dashed=1;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function ControlFlow3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_FLOW_3}
      {...props}
      _style={extendStyle(CONTROL_FLOW_3, props)}
    />
  )
}
