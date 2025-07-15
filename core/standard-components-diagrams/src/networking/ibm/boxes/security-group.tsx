import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_GROUP = {
  _style: {
    group:
      'fontStyle=0;verticalAlign=top;align=center;spacingTop=-2;fillColor=none;rounded=0;whiteSpace=wrap;html=1;strokeColor=#FF0000;strokeWidth=2;dashed=1;container=1;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#FF0000',
    },
  },
}

export function SecurityGroup(props: DiagramNodeProps) {
  return <Shape {...SECURITY_GROUP} {...props} />
}
