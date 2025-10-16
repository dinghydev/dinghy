import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTOR = {
  _style: {
    entity:
      'shape=umlActor;html=1;verticalLabelPosition=bottom;verticalAlign=top;align=center;',
  },
  _width: 30,
  _height: 60,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} _style={extendStyle(ACTOR, props)} />
}
