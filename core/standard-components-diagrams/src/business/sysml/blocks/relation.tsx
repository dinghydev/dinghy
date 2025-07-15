import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELATION = {
  _style:
    'align=right;html=1;verticalAlign=bottom;endArrow=none;startArrow=diamondThin;startSize=14;startFill=1;edgeStyle=none;',
  _width: 160,
  _height: 0,
}

export function Relation(props: DiagramNodeProps) {
  return <Shape {...RELATION} {...props} />
}
