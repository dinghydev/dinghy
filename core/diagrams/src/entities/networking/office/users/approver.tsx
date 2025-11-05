import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPROVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.approver;',
  },
  _original_width: 59,
  _original_height: 55,
}

export function Approver(props: NodeProps) {
  return (
    <Shape {...APPROVER} {...props} _style={extendStyle(APPROVER, props)} />
  )
}
