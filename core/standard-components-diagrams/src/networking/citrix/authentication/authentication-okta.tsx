import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATION_OKTA = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_okta;',
  },
  _width: 60,
  _height: 60,
}

export function AuthenticationOkta(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATION_OKTA}
      {...props}
      _style={extendStyle(AUTHENTICATION_OKTA, props)}
    />
  )
}
