import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLASSIC_LOAD_BALANCER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.classic_load_balancer;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function ClassicLoadBalancer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASSIC_LOAD_BALANCER}
      {...props}
      _style={extendStyle(CLASSIC_LOAD_BALANCER, props)}
    />
  )
}
