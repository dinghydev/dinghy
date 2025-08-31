import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA_CORE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Jira_Core_Logo.svg;html=1;strokeColor=none;',
  },
  _width: 55,
  _height: 66,
}

export function JiraCore(props: DiagramNodeProps) {
  return (
    <Shape {...JIRA_CORE} {...props} _style={extendStyle(JIRA_CORE, props)} />
  )
}
