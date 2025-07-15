import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DURATION_CONSTRAINT_3 = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;',
  _width: 3,
  _height: 250,
}

export function DurationConstraint3(props: DiagramNodeProps) {
  return <Shape {...DURATION_CONSTRAINT_3} {...props} />
}
