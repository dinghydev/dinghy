import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATION_FIDO2 = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_fido2;',
  },
  _width: 60,
  _height: 60,
}

export function AuthenticationFido2(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATION_FIDO2}
      {...props}
      _style={extendStyle(AUTHENTICATION_FIDO2, props)}
    />
  )
}
