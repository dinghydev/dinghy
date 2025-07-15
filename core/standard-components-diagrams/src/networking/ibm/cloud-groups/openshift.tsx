import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPENSHIFT = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#198038;fillColor=none;strokeWidth=1',
    entity: {
      strokeColor: '#198038',
    },
  },
}

export function Openshift(props: DiagramNodeProps) {
  return <Shape {...OPENSHIFT} {...props} />
}
