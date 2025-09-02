import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTOR = {
  _style: {
    entity:
      'shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;',
  },
  _original_width: 30,
  _original_height: 60,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} _style={extendStyle(ACTOR, props)} />
}
