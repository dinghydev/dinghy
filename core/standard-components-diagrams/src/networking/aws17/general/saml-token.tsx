import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAML_TOKEN = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.saml_token;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 69,
  _height: 72,
}

export function SamlToken(props: DiagramNodeProps) {
  return (
    <Shape {...SAML_TOKEN} {...props} _style={extendStyle(SAML_TOKEN, props)} />
  )
}
