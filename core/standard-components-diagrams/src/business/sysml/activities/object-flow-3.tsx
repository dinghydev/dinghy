import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_FLOW_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;strokeWidth=2;endSize=12;',
  },
  _original_width: 3,
  _original_height: 60,
}

export function ObjectFlow3(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW_3}
      {...props}
      _style={extendStyle(OBJECT_FLOW_3, props)}
    />
  )
}
