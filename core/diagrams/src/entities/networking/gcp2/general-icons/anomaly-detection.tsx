import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANOMALY_DETECTION = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.anomaly_detection',
  },
  _width: 78,
  _height: 100,
}

export function AnomalyDetection(props: NodeProps) {
  return (
    <Shape
      {...ANOMALY_DETECTION}
      {...props}
      _style={extendStyle(ANOMALY_DETECTION, props)}
    />
  )
}
