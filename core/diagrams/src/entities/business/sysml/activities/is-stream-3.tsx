import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IS_STREAM_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;entryX=0;entryY=0.5;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function IsStream3(props: NodeProps) {
  return (
    <Shape
      {...IS_STREAM_3}
      {...props}
      _style={extendStyle(IS_STREAM_3, props)}
    />
  )
}
