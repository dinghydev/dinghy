import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAML_OIDC_3 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#188918;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;endArrow=blockThin;endFill=1;strokeWidth=1.5;startArrow=none;startFill=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;',
  },
  _width: 2,
  _height: 100,
}

export function SamlOidc3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAML_OIDC_3}
      {...props}
      _style={extendStyle(SAML_OIDC_3, props)}
    />
  )
}
