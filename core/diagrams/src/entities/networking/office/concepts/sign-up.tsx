import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGN_UP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.sign_up;',
  },
  _original_width: 51,
  _original_height: 47,
}

export function SignUp(props: NodeProps) {
  return <Shape {...SIGN_UP} {...props} _style={extendStyle(SIGN_UP, props)} />
}
