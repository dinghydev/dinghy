import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTE_53 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.route_53;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 70.5,
  _original_height: 85.5,
}

export function Route53(props: DiagramNodeProps) {
  return (
    <Shape {...ROUTE_53} {...props} _style={extendStyle(ROUTE_53, props)} />
  )
}
