import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PASSWORD_FIELD = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.pwField;strokeColor=#999999;mainText=;align=left;fontColor=#666666;fontSize=17;spacingLeft=3;',
  },
  _original_width: 150,
  _original_height: 30,
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
