import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PASSWORD_FIELD = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iTextInput;strokeColor=#444444;align=left;buttonText=;fontSize=8;whiteSpace=wrap;',
  },
  _width: 43.5,
  _height: 15,
}

export function PasswordField(props: DiagramNodeProps) {
  return (
    <Shape
      {...PASSWORD_FIELD}
      {...props}
      _style={extendStyle(PASSWORD_FIELD, props)}
    />
  )
}
