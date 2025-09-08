import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTO_SCALING = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.auto_scaling;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 76.5,
}

export function AutoScaling(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTO_SCALING}
      {...props}
      _style={extendStyle(AUTO_SCALING, props)}
    />
  )
}
