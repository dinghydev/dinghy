import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REALIZATION = {
  _style:
    'endArrow=block;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  _width: 160,
  _height: 0,
}

export function Realization(props: DiagramNodeProps) {
  return <Dependency {...REALIZATION} {...props} />
}
