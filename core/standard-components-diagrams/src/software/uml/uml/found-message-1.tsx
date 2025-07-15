import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FOUND_MESSAGE_1 = {
  _style:
    'html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;curved=0;rounded=0;',
  _width: 60,
  _height: 0,
}

export function FoundMessage1(props: DiagramNodeProps) {
  return <Dependency {...FOUND_MESSAGE_1} {...props} />
}
