import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTOR_FEMALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actor_1;',
  },
  _original_width: 23.5,
  _original_height: 50,
}

export function ActorFemale(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTOR_FEMALE}
      {...props}
      _style={extendStyle(ACTOR_FEMALE, props)}
    />
  )
}
