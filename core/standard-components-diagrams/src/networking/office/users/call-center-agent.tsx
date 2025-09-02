import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALL_CENTER_AGENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.call_center_agent;',
  },
  _original_width: 46,
  _original_height: 55,
}

export function CallCenterAgent(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_CENTER_AGENT}
      {...props}
      _style={extendStyle(CALL_CENTER_AGENT, props)}
    />
  )
}
