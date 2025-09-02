import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAPHANALYTICS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.graphanalytics;',
  },
  _original_width: 39.900000000000006,
  _original_height: 49.8,
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
