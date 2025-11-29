import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTOR = {
  _style: {
    entity:
      'shape=umlActor;html=1;verticalLabelPosition=bottom;verticalAlign=top;align=center;',
  },
  _width: 30,
  _height: 60,
}

export function Actor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTOR)} />
}
