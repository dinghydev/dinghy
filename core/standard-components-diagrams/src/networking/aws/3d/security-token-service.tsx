import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_TOKEN_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.securityTokenService;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 180,
  _original_height: 192,
}

export function SecurityTokenService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_TOKEN_SERVICE}
      {...props}
      _style={extendStyle(SECURITY_TOKEN_SERVICE, props)}
    />
  )
}
