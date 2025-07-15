import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_FLOW = {
  _style:
    'dashed=1;dashPattern=8 4;endArrow=blockThin;endFill=1;startArrow=oval;startFill=0;endSize=6;startSize=4;html=1;',
  _width: 160,
  _height: 0,
}

export function MessageFlow(props: DiagramNodeProps) {
  return <Dependency {...MESSAGE_FLOW} {...props} />
}
