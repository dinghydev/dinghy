import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ECS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ecs;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 67.5,
}

export function Ecs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ECS)} />
}
