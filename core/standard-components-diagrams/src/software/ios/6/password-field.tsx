import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PASSWORD_FIELD = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTextInput;strokeColor=#444444;align=left;buttonText=;fontSize=8;whiteSpace=wrap;',
  _width: 43.5,
  _height: 15,
}

export function PasswordField(props: DiagramNodeProps) {
  return <Shape {...PASSWORD_FIELD} {...props} />
}
