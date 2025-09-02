import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MFA_TOKEN = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.mfa_token;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MfaToken(props: DiagramNodeProps) {
  return (
    <Shape {...MFA_TOKEN} {...props} _style={extendStyle(MFA_TOKEN, props)} />
  )
}
