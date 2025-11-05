import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEETING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.meeting;',
  },
  _width: 59,
  _height: 38,
}

export function Meeting(props: NodeProps) {
  return <Shape {...MEETING} {...props} _style={extendStyle(MEETING, props)} />
}
