import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOG_ANALYTICS_WORKSPACES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Log_Analytics_Workspaces.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function LogAnalyticsWorkspaces(props: DiagramNodeProps) {
  return <Shape {...LOG_ANALYTICS_WORKSPACES} {...props} />
}
