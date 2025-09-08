import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEMPORARY_SECURITY_CREDENTIAL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.temporary_security_credential;fillColor=#ffffff;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 60,
}

export function TemporarySecurityCredential(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPORARY_SECURITY_CREDENTIAL}
      {...props}
      _style={extendStyle(TEMPORARY_SECURITY_CREDENTIAL, props)}
    />
  )
}
