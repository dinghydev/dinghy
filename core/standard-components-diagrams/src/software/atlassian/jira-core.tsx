import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA_CORE = {
  _style: 'image;html=1;image=img/lib/atlassian/Jira_Core_Logo.svg;',
  _width: 55,
  _height: 66,
}

export function JiraCore(props: DiagramNodeProps) {
  return <Shape {...JIRA_CORE} {...props} />
}
