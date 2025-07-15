import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_TOKEN_SERVICE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.securityTokenService;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 180,
  _height: 192,
}

export function SecurityTokenService(props: DiagramNodeProps) {
  return <Shape {...SECURITY_TOKEN_SERVICE} {...props} />
}
