import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JIRA_CORE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Core_Logo.svg;strokeColor=none;',
  },
  _original_width: 55,
  _original_height: 66,
}

export function JiraCore(props: DiagramNodeProps) {
  return (
    <Shape {...JIRA_CORE} {...props} _style={extendStyle(JIRA_CORE, props)} />
  )
}
