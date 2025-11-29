import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_ANALYTICS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_analytics;fillColor=#AD688B;gradientColor=none;',
  },
  _original_width: 90,
  _original_height: 93,
}

export function MobileAnalytics(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOBILE_ANALYTICS)} />
}
