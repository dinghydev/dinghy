import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_FLOW_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;endSize=12;',
  },
  _original_width: 2,
  _original_height: 60,
}

export function ControlFlow2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_FLOW_2}
      {...props}
      _style={extendStyle(CONTROL_FLOW_2, props)}
    />
  )
}
