import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECS_ANYWHERE_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_anywhere;',
  },
  _width: 44,
  _height: 48,
}

export function EcsAnywhere2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECS_ANYWHERE_2}
      {...props}
      _style={extendStyle(ECS_ANYWHERE_2, props)}
    />
  )
}
