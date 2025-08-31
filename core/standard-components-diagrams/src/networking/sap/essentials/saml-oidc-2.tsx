import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAML_OIDC_2 = {
  _style: {
    entity:
      'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=18;strokeColor=#188918;fontFamily=Helvetica;fontColor=default;targetPerimeterSpacing=15;endSize=4;startSize=4;endArrow=none;endFill=0;strokeWidth=1.5;startArrow=none;startFill=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;',
  },
  _width: 1,
  _height: 100,
}

export function SamlOidc2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAML_OIDC_2}
      {...props}
      _style={extendStyle(SAML_OIDC_2, props)}
    />
  )
}
