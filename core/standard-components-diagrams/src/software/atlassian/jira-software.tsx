import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JIRA_SOFTWARE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Jira_Software_Logo.svg;strokeColor=none;',
  },
  _width: 74,
  _height: 76,
}

export function JiraSoftware(props: DiagramNodeProps) {
  return (
    <Shape
      {...JIRA_SOFTWARE}
      {...props}
      _style={extendStyle(JIRA_SOFTWARE, props)}
    />
  )
}
