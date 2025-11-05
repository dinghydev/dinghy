import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PASSWORD_FIELD = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.pwField;strokeColor=#999999;mainText=;align=left;fontColor=#666666;fontSize=17;spacingLeft=3;',
  },
  _width: 150,
  _height: 30,
}

export function PasswordField(props: NodeProps) {
  return (
    <Shape
      {...PASSWORD_FIELD}
      {...props}
      _style={extendStyle(PASSWORD_FIELD, props)}
    />
  )
}
