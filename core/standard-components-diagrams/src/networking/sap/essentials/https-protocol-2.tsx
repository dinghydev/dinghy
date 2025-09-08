import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HTTPS_PROTOCOL_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#475E75;bendable=1;rounded=0;endFill=0;endSize=4;strokeWidth=1.5;startSize=4;startArrow=none;startFill=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=0.472;exitY=-0.059;exitDx=0;exitDy=0;exitPerimeter=0;elbow=vertical;edgeStyle=orthogonalEdgeStyle;',
  },
  _original_width: 1,
  _original_height: 50,
}

export function HttpsProtocol2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HTTPS_PROTOCOL_2}
      {...props}
      _style={extendStyle(HTTPS_PROTOCOL_2, props)}
    />
  )
}
