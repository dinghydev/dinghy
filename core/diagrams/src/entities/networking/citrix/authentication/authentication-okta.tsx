import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTHENTICATION_OKTA = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.authentication_okta;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AuthenticationOkta(props: NodeProps) {
  return (
    <Shape
      {...AUTHENTICATION_OKTA}
      {...props}
      _style={extendStyle(AUTHENTICATION_OKTA, props)}
    />
  )
}
