import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTOR = {
  _style:
    'shape=umlActor;html=1;verticalLabelPosition=bottom;verticalAlign=top;align=center;',
  _width: 30,
  _height: 60,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} _style={extendStyle(ACTOR, props)} />
}
