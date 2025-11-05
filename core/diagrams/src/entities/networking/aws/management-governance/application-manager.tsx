import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_MANAGER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.systems_manager_application_manager;',
  },
  _original_width: 78,
  _original_height: 74,
}

export function ApplicationManager(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_MANAGER}
      {...props}
      _style={extendStyle(APPLICATION_MANAGER, props)}
    />
  )
}
