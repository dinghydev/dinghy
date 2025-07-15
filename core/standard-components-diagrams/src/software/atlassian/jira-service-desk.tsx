import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA_SERVICE_DESK = {
  _style: 'image;html=1;image=img/lib/atlassian/Jira_Service_Desk_Logo.svg;',
  _width: 59,
  _height: 76,
}

export function JiraServiceDesk(props: DiagramNodeProps) {
  return <Shape {...JIRA_SERVICE_DESK} {...props} />
}
