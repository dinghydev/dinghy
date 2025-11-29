import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFRASTRUCTURE_ROLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.administrator;fillColor=#066A90;',
  },
  _width: 21.5,
  _height: 50,
}

export function InfrastructureRole(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INFRASTRUCTURE_ROLE)} />
}
