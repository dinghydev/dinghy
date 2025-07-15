import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE_ANALYTICS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_analytics;fillColor=#AD688B;gradientColor=none;',
  _width: 90,
  _height: 93,
}

export function MobileAnalytics(props: DiagramNodeProps) {
  return <Shape {...MOBILE_ANALYTICS} {...props} />
}
