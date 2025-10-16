import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAML_TOKEN = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.saml_token;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function SamlToken(props: DiagramNodeProps) {
  return (
    <Shape {...SAML_TOKEN} {...props} _style={extendStyle(SAML_TOKEN, props)} />
  )
}
