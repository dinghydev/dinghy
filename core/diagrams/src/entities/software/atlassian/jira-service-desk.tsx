import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JIRA_SERVICE_DESK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Service_Desk_Logo.svg;strokeColor=none;',
  },
  _original_width: 59,
  _original_height: 76,
}

export function JiraServiceDesk(props: NodeProps) {
  return (
    <Shape
      {...JIRA_SERVICE_DESK}
      {...props}
      _style={extendStyle(JIRA_SERVICE_DESK, props)}
    />
  )
}
