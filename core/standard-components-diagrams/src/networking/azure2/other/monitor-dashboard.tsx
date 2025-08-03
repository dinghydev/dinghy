import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MONITOR_DASHBOARD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Monitor_Dashboard.svg;strokeColor=none;',
  _width: 68,
  _height: 63.2,
}

export function MonitorDashboard(props: DiagramNodeProps) {
  return <Shape {...MONITOR_DASHBOARD} {...props} />
}
