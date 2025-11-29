import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JIRA_CORE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Core_Logo.svg;strokeColor=none;',
  },
  _original_width: 55,
  _original_height: 66,
}

export function JiraCore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JIRA_CORE)} />
}
