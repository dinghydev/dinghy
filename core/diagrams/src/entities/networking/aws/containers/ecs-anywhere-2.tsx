import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECS_ANYWHERE_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_anywhere;',
  },
  _original_width: 44,
  _original_height: 48,
}

export function EcsAnywhere2(props: NodeProps) {
  return (
    <Shape
      {...ECS_ANYWHERE_2}
      {...props}
      _style={extendStyle(ECS_ANYWHERE_2, props)}
    />
  )
}
