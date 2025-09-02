import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGN_IN = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;rSize=0;strokeColor=#999999;fillColor=#ffffff;',
  },
  _original_width: 200,
  _original_height: 300,
}

export function SignIn(props: DiagramNodeProps) {
  return <Shape {...SIGN_IN} {...props} _style={extendStyle(SIGN_IN, props)} />
}
