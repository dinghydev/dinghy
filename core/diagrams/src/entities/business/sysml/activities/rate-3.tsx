import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RATE_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;verticalAlign=top;entryX=0;entryY=0.5;labelBackgroundColor=none;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function Rate3(props: NodeProps) {
  return <Shape {...RATE_3} {...props} _style={extendStyle(RATE_3, props)} />
}
