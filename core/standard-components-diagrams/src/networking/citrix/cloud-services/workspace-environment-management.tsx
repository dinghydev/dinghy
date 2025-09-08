import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKSPACE_ENVIRONMENT_MANAGEMENT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.workspace_environment_management;',
  },
  _original_width: 50,
  _original_height: 38.74,
}

export function WorkspaceEnvironmentManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSPACE_ENVIRONMENT_MANAGEMENT}
      {...props}
      _style={extendStyle(WORKSPACE_ENVIRONMENT_MANAGEMENT, props)}
    />
  )
}
