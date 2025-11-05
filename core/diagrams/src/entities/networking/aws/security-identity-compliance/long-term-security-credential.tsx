import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LONG_TERM_SECURITY_CREDENTIAL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.long_term_security_credential;',
  },
  _original_width: 78,
  _original_height: 69,
}

export function LongTermSecurityCredential(props: NodeProps) {
  return (
    <Shape
      {...LONG_TERM_SECURITY_CREDENTIAL}
      {...props}
      _style={extendStyle(LONG_TERM_SECURITY_CREDENTIAL, props)}
    />
  )
}
