import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOTO_MEETING = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.goto_meeting;fillColor=#FAB616;gradientColor=#E12800;gradientDirection=north;',
  _width: 37,
  _height: 37,
}

export function GotoMeeting(props: DiagramNodeProps) {
  return <Shape {...GOTO_MEETING} {...props} />
}
