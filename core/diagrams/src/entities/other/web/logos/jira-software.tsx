import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JIRA_SOFTWARE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Jira_Software_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 74,
  _original_height: 76,
}

export function JiraSoftware(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JIRA_SOFTWARE)} />
}
