import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGN_IN = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;rSize=0;strokeColor=#999999;fillColor=#ffffff;',
  },
  _width: 200,
  _height: 300,
}

export function SignIn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIGN_IN)} />
}
