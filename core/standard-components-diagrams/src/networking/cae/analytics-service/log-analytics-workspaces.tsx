import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOG_ANALYTICS_WORKSPACES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Log_Analytics_Workspaces.svg;',
  _width: 50,
  _height: 50,
}

export function LogAnalyticsWorkspaces(props: DiagramNodeProps) {
  return <Shape {...LOG_ANALYTICS_WORKSPACES} {...props} />
}
