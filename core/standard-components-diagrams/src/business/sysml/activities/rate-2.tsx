import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RATE_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;startArrow=open;rounded=0;endArrow=none;verticalAlign=top;exitX=0;exitY=0.5;labelBackgroundColor=none;startSize=12;',
  },
  _width: 1,
  _height: 60,
}

export function Rate2(props: DiagramNodeProps) {
  return <Shape {...RATE_2} {...props} _style={extendStyle(RATE_2, props)} />
}
