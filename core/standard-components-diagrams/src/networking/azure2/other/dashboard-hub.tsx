import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DASHBOARD_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Dashboard_Hub.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52,
}

export function DashboardHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...DASHBOARD_HUB}
      {...props}
      _style={extendStyle(DASHBOARD_HUB, props)}
    />
  )
}
