import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA_CORE = {
  _style: 'image;image=img/lib/atlassian/Jira_Core_Logo.svg;html=1;',
  _width: 55,
  _height: 66,
}

export function JiraCore(props: DiagramNodeProps) {
  return <Shape {...JIRA_CORE} {...props} />
}
