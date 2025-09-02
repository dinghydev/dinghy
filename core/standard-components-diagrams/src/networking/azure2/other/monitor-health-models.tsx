import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_HEALTH_MODELS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Monitor_Health_Models.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MonitorHealthModels(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_HEALTH_MODELS}
      {...props}
      _style={extendStyle(MONITOR_HEALTH_MODELS, props)}
    />
  )
}
