import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA_SERVICE_DESK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Service_Desk_Logo.svg;strokeColor=none;',
  },
  _width: 59,
  _height: 76,
}

export function JiraServiceDesk(props: DiagramNodeProps) {
  return (
    <Shape
      {...JIRA_SERVICE_DESK}
      {...props}
      _style={extendStyle(JIRA_SERVICE_DESK, props)}
    />
  )
}
