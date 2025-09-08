import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARED_BANDWIDTH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.shared_bandwidth;',
  },
  _original_width: 50.099999999999994,
  _original_height: 50.099999999999994,
}

export function SharedBandwidth(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHARED_BANDWIDTH}
      {...props}
      _style={extendStyle(SHARED_BANDWIDTH, props)}
    />
  )
}
