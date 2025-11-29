import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECS_SERVICE_CONNECT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_service_connect;',
  },
  _original_width: 48,
  _original_height: 44,
}

export function EcsServiceConnect(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ECS_SERVICE_CONNECT)} />
}
