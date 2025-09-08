import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANOMALY_DETECTION = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.anomaly_detection',
  },
  _original_width: 78,
  _original_height: 100,
}

export function AnomalyDetection(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANOMALY_DETECTION}
      {...props}
      _style={extendStyle(ANOMALY_DETECTION, props)}
    />
  )
}
