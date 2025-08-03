import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA_SERVICE_DESK = {
  _style:
    'image;image=img/lib/atlassian/Jira_Service_Desk_Logo.svg;html=1;strokeColor=none;',
  _width: 59,
  _height: 76,
}

export function JiraServiceDesk(props: DiagramNodeProps) {
  return <Shape {...JIRA_SERVICE_DESK} {...props} />
}
