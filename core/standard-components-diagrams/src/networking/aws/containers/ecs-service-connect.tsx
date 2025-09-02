import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECS_SERVICE_CONNECT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_service_connect;',
  },
  _original_width: 48,
  _original_height: 44,
}

export function EcsServiceConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECS_SERVICE_CONNECT}
      {...props}
      _style={extendStyle(ECS_SERVICE_CONNECT, props)}
    />
  )
}
