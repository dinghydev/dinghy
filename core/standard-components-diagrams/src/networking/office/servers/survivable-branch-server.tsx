import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SURVIVABLE_BRANCH_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.survivable_branch_server;',
  },
  _width: 42,
  _height: 58,
}

export function SurvivableBranchServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURVIVABLE_BRANCH_SERVER}
      {...props}
      _style={extendStyle(SURVIVABLE_BRANCH_SERVER, props)}
    />
  )
}
