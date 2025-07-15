import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DURATION_CONSTRAINT_4 = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;spacingBottom=5;endSize=12;',
  _width: 4,
  _height: 250,
}

export function DurationConstraint4(props: DiagramNodeProps) {
  return <Shape {...DURATION_CONSTRAINT_4} {...props} />
}
