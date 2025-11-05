import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ERROR_MESSAGE_FIELD_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;align=center;strokeColor=#DFE1E5;html=1;strokeWidth=1;fontSize=12;shadow=1',
  },
  _width: 2,
  _height: 68,
}

export function ErrorMessageField2(props: NodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE_FIELD_2}
      {...props}
      _style={extendStyle(ERROR_MESSAGE_FIELD_2, props)}
    />
  )
}
