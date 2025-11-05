import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.communications;',
  },
  _original_width: 54,
  _original_height: 58,
}

export function Communications(props: NodeProps) {
  return (
    <Shape
      {...COMMUNICATIONS}
      {...props}
      _style={extendStyle(COMMUNICATIONS, props)}
    />
  )
}
