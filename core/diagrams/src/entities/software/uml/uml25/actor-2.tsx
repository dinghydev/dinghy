import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTOR_2 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;dashed=0;whiteSpace=wrap;',
  },
  _width: 160,
  _height: 70,
}

export function Actor2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTOR_2)} />
}
