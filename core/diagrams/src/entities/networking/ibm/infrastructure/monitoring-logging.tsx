import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MONITORING_LOGGING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/monitoring_logging.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function MonitoringLogging(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITORING_LOGGING}
      {...props}
      _style={extendStyle(MONITORING_LOGGING, props)}
    />
  )
}
