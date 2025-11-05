import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOTO_MEETING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.goto_meeting;fillColor=#FAB616;gradientColor=#E12800;gradientDirection=north;',
  },
  _original_width: 37,
  _original_height: 37,
}

export function GotoMeeting(props: NodeProps) {
  return (
    <Shape
      {...GOTO_MEETING}
      {...props}
      _style={extendStyle(GOTO_MEETING, props)}
    />
  )
}
