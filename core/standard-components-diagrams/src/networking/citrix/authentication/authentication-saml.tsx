import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTHENTICATION_SAML = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_saml;',
  _width: 50,
  _height: 50,
}

export function AuthenticationSaml(props: DiagramNodeProps) {
  return <Shape {...AUTHENTICATION_SAML} {...props} />
}
