import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREATION_DESTRUCTION_EVENT_5 = {
  _style:
    'edgeStyle=elbowEdgeStyle;endArrow=open;elbow=vertical;endSize=12;html=1;rounded=0;',
  _width: 9,
  _height: 220,
}

export function CreationDestructionEvent5(props: DiagramNodeProps) {
  return <Shape {...CREATION_DESTRUCTION_EVENT_5} {...props} />
}
