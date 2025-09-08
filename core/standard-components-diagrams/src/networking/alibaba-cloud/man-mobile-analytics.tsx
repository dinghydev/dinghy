import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAN_MOBILE_ANALYTICS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.man_mobile_analytics;',
  },
  _original_width: 50.099999999999994,
  _original_height: 41.4,
}

export function ManMobileAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAN_MOBILE_ANALYTICS}
      {...props}
      _style={extendStyle(MAN_MOBILE_ANALYTICS, props)}
    />
  )
}
