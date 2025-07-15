import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTOR_MALE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actor_2;',
  _width: 19,
  _height: 50,
}

export function ActorMale(props: DiagramNodeProps) {
  return <Shape {...ACTOR_MALE} {...props} />
}
