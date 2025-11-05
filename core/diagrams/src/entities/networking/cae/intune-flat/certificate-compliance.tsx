import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CERTIFICATE_COMPLIANCE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.certificate',
  },
  _original_width: 50,
  _original_height: 49,
}

export function CertificateCompliance(props: NodeProps) {
  return (
    <Shape
      {...CERTIFICATE_COMPLIANCE}
      {...props}
      _style={extendStyle(CERTIFICATE_COMPLIANCE, props)}
    />
  )
}
