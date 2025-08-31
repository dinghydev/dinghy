import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE_COMPLIANCE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.certificate',
  _width: 50,
  _height: 49,
}

export function CertificateCompliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...CERTIFICATE_COMPLIANCE}
      {...props}
      _style={extendStyle(CERTIFICATE_COMPLIANCE, props)}
    />
  )
}
