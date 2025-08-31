import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARED_BANDWIDTH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.shared_bandwidth;',
  },
  _width: 60,
  _height: 60,
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
