import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAML_OIDC = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#188918;fillColor=#f5fae5;fontColor=#266f3a;strokeWidth=1.5;fontSize=10;fontStyle=1',
  },
  _width: 0,
  _height: 100,
}

export function SamlOidc(props: DiagramNodeProps) {
  return (
    <Shape {...SAML_OIDC} {...props} _style={extendStyle(SAML_OIDC, props)} />
  )
}
