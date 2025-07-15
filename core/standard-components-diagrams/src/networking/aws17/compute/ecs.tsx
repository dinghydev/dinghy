import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecs;fillColor=#F58534;gradientColor=none;',
  _width: 72,
  _height: 67.5,
}

export function Ecs(props: DiagramNodeProps) {
  return <Shape {...ECS} {...props} />
}
