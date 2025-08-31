import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATED_USER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.authenticated_user;',
  },
  _width: 60,
  _height: 60,
}

export function AuthenticatedUser(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATED_USER}
      {...props}
      _style={extendStyle(AUTHENTICATED_USER, props)}
    />
  )
}
