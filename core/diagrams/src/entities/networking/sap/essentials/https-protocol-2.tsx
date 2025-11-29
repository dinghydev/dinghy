import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HTTPS_PROTOCOL_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=0.472;exitY=-0.059;exitDx=0;exitDy=0;exitPerimeter=0;elbow=vertical;edgeStyle=orthogonalEdgeStyle;',
  },
  _width: 1,
  _height: 50,
}

export function HttpsProtocol2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HTTPS_PROTOCOL_2)} />
}
