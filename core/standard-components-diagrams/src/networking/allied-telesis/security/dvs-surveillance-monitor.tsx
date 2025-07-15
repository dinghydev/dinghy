import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DVS_SURVEILLANCE_MONITOR = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/DVS_Surveillance_Monitor.svg;',
  _width: 42,
  _height: 60,
}

export function DvsSurveillanceMonitor(props: DiagramNodeProps) {
  return <Shape {...DVS_SURVEILLANCE_MONITOR} {...props} />
}
