import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURVIVABLE_BRANCH_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.survivable_branch_server;',
  },
  _original_width: 42,
  _original_height: 58,
}

export function SurvivableBranchServer(props: NodeProps) {
  return (
    <Shape
      {...SURVIVABLE_BRANCH_SERVER}
      {...props}
      _style={extendStyle(SURVIVABLE_BRANCH_SERVER, props)}
    />
  )
}
