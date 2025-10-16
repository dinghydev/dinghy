import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GRAPHANALYTICS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.graphanalytics;',
  },
  _width: 39.900000000000006,
  _height: 49.8,
}

export function Graphanalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRAPHANALYTICS}
      {...props}
      _style={extendStyle(GRAPHANALYTICS, props)}
    />
  )
}
