import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;endArrow=open;labelBackgroundColor=none;strokeWidth=2;endSize=12;',
  },
  _width: 3,
  _height: 60,
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
