import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IS_STREAM_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;startArrow=open;rounded=0;endArrow=none;exitX=0;exitY=0.5;startSize=12;',
  },
  _width: 1,
  _height: 60,
}

export function IsStream2(props: NodeProps) {
  return (
    <Shape
      {...IS_STREAM_2}
      {...props}
      _style={extendStyle(IS_STREAM_2, props)}
    />
  )
}
