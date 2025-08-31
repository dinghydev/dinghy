import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA = {
  _style:
    'image;image=img/lib/atlassian/Jira_Logo.svg;html=1;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Jira(props: DiagramNodeProps) {
  return <Shape {...JIRA} {...props} _style={extendStyle(JIRA, props)} />
}
