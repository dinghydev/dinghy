import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_DASHBOARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Monitor_Dashboard.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.2,
}

export function MonitorDashboard(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_DASHBOARD}
      {...props}
      _style={extendStyle(MONITOR_DASHBOARD, props)}
    />
  )
}
