import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPTIMIZED_INSTANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.optimized_instance;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function OptimizedInstance(props: DiagramNodeProps) {
  return <Shape {...OPTIMIZED_INSTANCE} {...props} />
}
