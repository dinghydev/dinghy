import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEETINGPLACE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.meetingplace;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 40,
  _original_height: 64,
}

export function Meetingplace(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEETINGPLACE}
      {...props}
      _style={extendStyle(MEETINGPLACE, props)}
    />
  )
}
