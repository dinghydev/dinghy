import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPTIMIZED_INSTANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.optimized_instance;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function OptimizedInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTIMIZED_INSTANCE}
      {...props}
      _style={extendStyle(OPTIMIZED_INSTANCE, props)}
    />
  )
}
