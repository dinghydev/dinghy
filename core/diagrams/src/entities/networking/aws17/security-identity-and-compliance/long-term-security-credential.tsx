import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LONG_TERM_SECURITY_CREDENTIAL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.long_term_security_credential;fillColor=#ffffff;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 48,
}

export function LongTermSecurityCredential(props: DiagramNodeProps) {
  return (
    <Shape
      {...LONG_TERM_SECURITY_CREDENTIAL}
      {...props}
      _style={extendStyle(LONG_TERM_SECURITY_CREDENTIAL, props)}
    />
  )
}
