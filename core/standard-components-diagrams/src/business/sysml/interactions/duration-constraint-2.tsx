import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DURATION_CONSTRAINT_2 = {
  _style: 'edgeStyle=none;dashed=1;endArrow=none;html=1;',
  _width: 2,
  _height: 250,
}

export function DurationConstraint2(props: DiagramNodeProps) {
  return <Shape {...DURATION_CONSTRAINT_2} {...props} />
}
