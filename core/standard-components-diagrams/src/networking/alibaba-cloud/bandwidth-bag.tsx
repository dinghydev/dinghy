import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANDWIDTH_BAG = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.bandwidth_bag;',
  _width: 54.900000000000006,
  _height: 39.900000000000006,
}

export function BandwidthBag(props: DiagramNodeProps) {
  return (
    <Shape
      {...BANDWIDTH_BAG}
      {...props}
      _style={extendStyle(BANDWIDTH_BAG, props)}
    />
  )
}
