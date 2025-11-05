import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AND = {
  _style: {
    entity: 'shape=or;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 80,
}

export function And(props: NodeProps) {
  return <Shape {...AND} {...props} _style={extendStyle(AND, props)} />
}
