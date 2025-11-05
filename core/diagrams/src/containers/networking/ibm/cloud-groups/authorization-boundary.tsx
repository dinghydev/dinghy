import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTHORIZATION_BOUNDARY = {
  _style: {
    container:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#FA4D56;fillColor=none;strokeWidth=2',
    entity: {
      strokeColor: '#FA4D56',
    },
  },
}

export function AuthorizationBoundary(props: NodeProps) {
  return (
    <Shape
      {...AUTHORIZATION_BOUNDARY}
      {...props}
      _style={extendStyle(AUTHORIZATION_BOUNDARY, props)}
    />
  )
}
