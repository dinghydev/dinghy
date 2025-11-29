import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUNDED_RECTANGLE = {
  _style: {
    entity: 'rounded=1;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 60,
}

export function RoundedRectangle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUNDED_RECTANGLE)} />
}
