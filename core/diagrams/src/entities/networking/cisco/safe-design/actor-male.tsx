import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTOR_MALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actor_2;',
  },
  _width: 19,
  _height: 50,
}

export function ActorMale(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ACTOR_MALE)} />
}
