import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTION = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function Action(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTION)} />
}
