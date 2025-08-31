import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RATE_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;verticalAlign=top;entryX=0;entryY=0.5;labelBackgroundColor=none;endSize=12;',
  _width: 2,
  _height: 60,
}

export function Rate3(props: DiagramNodeProps) {
  return <Shape {...RATE_3} {...props} _style={extendStyle(RATE_3, props)} />
}
