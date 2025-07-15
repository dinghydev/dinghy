import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_STREAM_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;endArrow=open;rounded=0;entryX=0;entryY=0.5;endSize=12;',
  _width: 2,
  _height: 60,
}

export function IsStream3(props: DiagramNodeProps) {
  return <Shape {...IS_STREAM_3} {...props} />
}
