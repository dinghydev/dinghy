import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CERTIFICATE_AUTHORITY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.certificate_authority;',
  },
  _original_width: 46,
  _original_height: 59,
}

export function CertificateAuthority(props: DiagramNodeProps) {
  return (
    <Shape
      {...CERTIFICATE_AUTHORITY}
      {...props}
      _style={extendStyle(CERTIFICATE_AUTHORITY, props)}
    />
  )
}
