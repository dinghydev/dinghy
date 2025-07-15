import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IS_STREAM_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;startArrow=open;rounded=0;endArrow=none;exitX=0;exitY=0.5;startSize=12;',
  _width: 1,
  _height: 60,
}

export function IsStream2(props: DiagramNodeProps) {
  return <Shape {...IS_STREAM_2} {...props} />
}
