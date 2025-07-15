import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA_SOFTWARE = {
  _style: 'image;html=1;image=img/lib/atlassian/Jira_Software_Logo.svg;',
  _width: 74,
  _height: 76,
}

export function JiraSoftware(props: DiagramNodeProps) {
  return <Shape {...JIRA_SOFTWARE} {...props} />
}
