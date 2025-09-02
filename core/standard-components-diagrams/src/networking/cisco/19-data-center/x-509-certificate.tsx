import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X_509_CERTIFICATE = {
  _style: {
    entity:
      'points=[[0.015,0.015,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[0.985,0.015,0],[1,0.22,0],[1,0.44,0],[1,0.67,0],[0.985,0.89,0],[0,0.22,0],[0,0.44,0],[0,0.67,0],[0.015,0.89,0],[0.25,0.91,0],[0.5,0.91,0],[0.785,0.955,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.x509_certificate;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 47.5,
}

export function X509Certificate(props: DiagramNodeProps) {
  return (
    <Shape
      {...X_509_CERTIFICATE}
      {...props}
      _style={extendStyle(X_509_CERTIFICATE, props)}
    />
  )
}
