import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIGN_UP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.sign_up;',
  _width: 51,
  _height: 47,
}

export function SignUp(props: DiagramNodeProps) {
  return <Shape {...SIGN_UP} {...props} />
}
