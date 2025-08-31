import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_ANALYTICS_WORKSPACES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Log_Analytics_Workspaces.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function LogAnalyticsWorkspaces(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOG_ANALYTICS_WORKSPACES}
      {...props}
      _style={extendStyle(LOG_ANALYTICS_WORKSPACES, props)}
    />
  )
}
