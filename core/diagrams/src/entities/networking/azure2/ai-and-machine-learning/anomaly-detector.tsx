import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANOMALY_DETECTOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Anomaly_Detector.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AnomalyDetector(props: NodeProps) {
  return (
    <Shape
      {...ANOMALY_DETECTOR}
      {...props}
      _style={extendStyle(ANOMALY_DETECTOR, props)}
    />
  )
}
