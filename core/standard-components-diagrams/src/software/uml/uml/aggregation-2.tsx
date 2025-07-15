import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGGREGATION_2 = {
  _style: 'endArrow=diamondThin;endFill=0;endSize=24;html=1;',
  _width: 160,
  _height: 0,
}

export function Aggregation2(props: DiagramNodeProps) {
  return <Dependency {...AGGREGATION_2} {...props} />
}
