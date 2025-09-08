import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUILT_IN_MANAGEMENT_FOR_AGENTS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.built_in_management_for_agents;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function BuiltInManagementForAgents(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUILT_IN_MANAGEMENT_FOR_AGENTS}
      {...props}
      _style={extendStyle(BUILT_IN_MANAGEMENT_FOR_AGENTS, props)}
    />
  )
}
