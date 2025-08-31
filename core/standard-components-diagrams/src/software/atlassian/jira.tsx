import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Logo.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Jira(props: DiagramNodeProps) {
  return <Shape {...JIRA} {...props} _style={extendStyle(JIRA, props)} />
}
