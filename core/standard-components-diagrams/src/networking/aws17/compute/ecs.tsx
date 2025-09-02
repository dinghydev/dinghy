import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecs;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 67.5,
}

export function Ecs(props: DiagramNodeProps) {
  return <Shape {...ECS} {...props} _style={extendStyle(ECS, props)} />
}
