import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTHORIZATION_BOUNDARY = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#FA4D56;fillColor=none;strokeWidth=2',
    entity: {
      strokeColor: '#FA4D56',
    },
  },
}

export function AuthorizationBoundary(props: DiagramNodeProps) {
  return <Shape {...AUTHORIZATION_BOUNDARY} {...props} />
}
