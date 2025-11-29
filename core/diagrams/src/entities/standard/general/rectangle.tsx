import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECTANGLE = {
  _style: {
    entity: 'rounded=0;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 60,
}

export function Rectangle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RECTANGLE)} />
}
