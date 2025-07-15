import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOUND_MESSAGE_2 = {
  _style:
    'html=1;verticalAlign=bottom;startArrow=circle;startFill=1;endArrow=open;startSize=6;endSize=8;curved=0;rounded=0;',
  _width: 80,
  _height: 0,
}

export function FoundMessage2(props: DiagramNodeProps) {
  return <Dependency {...FOUND_MESSAGE_2} {...props} />
}
