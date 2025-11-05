import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ERROR_MESSAGE_FIELD = {
  _style: {
    entity:
      'rounded=1;arcSize=9;align=left;spacingLeft=5;strokeColor=#FFAB00;html=1;strokeWidth=2;fontSize=12',
  },
  _width: 1,
  _height: 58,
}

export function ErrorMessageField(props: NodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE_FIELD}
      {...props}
      _style={extendStyle(ERROR_MESSAGE_FIELD, props)}
    />
  )
}
