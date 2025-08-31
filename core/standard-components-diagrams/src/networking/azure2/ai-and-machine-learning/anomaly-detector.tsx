import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANOMALY_DETECTOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Anomaly_Detector.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AnomalyDetector(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANOMALY_DETECTOR}
      {...props}
      _style={extendStyle(ANOMALY_DETECTOR, props)}
    />
  )
}
