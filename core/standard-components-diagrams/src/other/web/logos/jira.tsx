import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JIRA = {
  _style:
    'image;image=img/lib/atlassian/Jira_Logo.svg;html=1;strokeColor=none;',
  _width: 72,
  _height: 72,
}

export function Jira(props: DiagramNodeProps) {
  return <Shape {...JIRA} {...props} />
}
