import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE_AUTHORITY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.certificate_manager_2;',
  },
  _width: 78,
  _height: 72,
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
