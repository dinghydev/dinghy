import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISSUE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.issue;issueType=story;issuePriority=blocker;issueStatus=inProgress;verticalAlign=top;align=left;whiteSpace=wrap;overflow=hidden;spacingTop=25;strokeColor=#A8ADB0;fillColor=#EEEEEE;fontSize=12;backgroundOutline=1;sketch=0;',
  },
  _original_width: 0,
  _original_height: 50,
}

export function Issue(props: DiagramNodeProps) {
  return <Shape {...ISSUE} {...props} _style={extendStyle(ISSUE, props)} />
}
