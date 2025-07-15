import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANOMALY_DETECTOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Anomaly_Detector.svg;',
  _width: 68,
  _height: 68,
}

export function AnomalyDetector(props: DiagramNodeProps) {
  return <Shape {...ANOMALY_DETECTOR} {...props} />
}
