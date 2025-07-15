import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEETINGPLACE = {
  _style:
    'shape=mxgraph.cisco.misc.meetingplace;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 40,
  _height: 64,
}

export function Meetingplace(props: DiagramNodeProps) {
  return <Shape {...MEETINGPLACE} {...props} />
}
