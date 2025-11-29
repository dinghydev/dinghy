import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CERTIFICATE_AUTHORITY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.certificate_authority;',
  },
  _original_width: 46,
  _original_height: 59,
}

export function CertificateAuthority(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CERTIFICATE_AUTHORITY)} />
}
