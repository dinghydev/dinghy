import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOG_ANALYTICS_WORKSPACES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Log_Analytics_Workspaces.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
