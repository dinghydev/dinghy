import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPANDED_APPLICATION = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#A56EFF;fillColor=none;',
    entity: {
      strokeColor: '#A56EFF',
    },
  },
}

export function ExpandedApplication(props: DiagramNodeProps) {
  return <Shape {...EXPANDED_APPLICATION} {...props} />
}
