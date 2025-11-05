import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MFA_TOKEN = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mfa_token;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 61.5,
  _original_height: 61.5,
}

export function MfaToken(props: NodeProps) {
  return (
    <Shape {...MFA_TOKEN} {...props} _style={extendStyle(MFA_TOKEN, props)} />
  )
}
