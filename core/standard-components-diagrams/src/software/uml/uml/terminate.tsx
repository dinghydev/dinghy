import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINATE = {
  _style:
    'endArrow=open;startArrow=cross;endFill=0;startFill=0;endSize=8;startSize=10;html=1;',
  _width: 160,
  _height: 0,
}

export function Terminate(props: DiagramNodeProps) {
  return <Dependency {...TERMINATE} {...props} />
}
