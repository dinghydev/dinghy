import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OR = {
  _style: {
    entity: 'shape=xor;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 80,
}

export function Or(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OR)} />
}
