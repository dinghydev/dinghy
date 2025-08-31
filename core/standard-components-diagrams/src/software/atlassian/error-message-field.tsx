import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_MESSAGE_FIELD = {
  _style:
    'rounded=1;arcSize=9;align=left;spacingLeft=5;strokeColor=#FFAB00;html=1;strokeWidth=2;fontSize=12',
  _width: 1,
  _height: 58,
}

export function ErrorMessageField(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE_FIELD}
      {...props}
      _style={extendStyle(ERROR_MESSAGE_FIELD, props)}
    />
  )
}
