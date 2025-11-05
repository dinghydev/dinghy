import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JIRA = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Logo.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function Jira(props: NodeProps) {
  return <Shape {...JIRA} {...props} _style={extendStyle(JIRA, props)} />
}
