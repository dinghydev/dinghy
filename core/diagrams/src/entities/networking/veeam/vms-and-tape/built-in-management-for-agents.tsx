import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILT_IN_MANAGEMENT_FOR_AGENTS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.built_in_management_for_agents;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function BuiltInManagementForAgents(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BUILT_IN_MANAGEMENT_FOR_AGENTS)}
    />
  )
}
