import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Logo.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 72,
}

export function Jira(props: DiagramNodeProps) {
  return <Shape {...JIRA} {...props} _style={extendStyle(JIRA, props)} />
}
