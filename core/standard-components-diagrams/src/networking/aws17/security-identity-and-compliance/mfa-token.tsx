import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MFA_TOKEN = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mfa_token;fillColor=#7D7C7C;gradientColor=none;',
  _width: 61.5,
  _height: 61.5,
}

export function MfaToken(props: DiagramNodeProps) {
  return <Shape {...MFA_TOKEN} {...props} />
}
