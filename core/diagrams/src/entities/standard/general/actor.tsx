import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTOR = {
  _style: {
    entity:
      'shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;',
  },
  _width: 30,
  _height: 60,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} _style={extendStyle(ACTOR, props)} />
}
