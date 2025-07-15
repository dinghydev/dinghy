import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE_AUTHORITY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.certificate_authority;',
  _width: 46,
  _height: 59,
}

export function CertificateAuthority(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE_AUTHORITY} {...props} />
}
