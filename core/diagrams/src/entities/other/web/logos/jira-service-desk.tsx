import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JIRA_SERVICE_DESK = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Jira_Service_Desk_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 59,
  _original_height: 76,
}

export function JiraServiceDesk(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JIRA_SERVICE_DESK)} />
}
