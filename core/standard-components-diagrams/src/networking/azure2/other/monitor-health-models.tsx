import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITOR_HEALTH_MODELS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Monitor_Health_Models.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function MonitorHealthModels(props: DiagramNodeProps) {
  return <Shape {...MONITOR_HEALTH_MODELS} {...props} />
}
