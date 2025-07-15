import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALL_CENTER_AGENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.call_center_agent;',
  _width: 46,
  _height: 55,
}

export function CallCenterAgent(props: DiagramNodeProps) {
  return <Shape {...CALL_CENTER_AGENT} {...props} />
}
