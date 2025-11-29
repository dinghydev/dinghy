import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTOR_2 = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function Actor2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTOR_2)} />
}
