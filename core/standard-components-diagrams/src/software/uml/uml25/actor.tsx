import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTOR = {
  _style:
    'shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;',
  _width: 30,
  _height: 60,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} />
}
