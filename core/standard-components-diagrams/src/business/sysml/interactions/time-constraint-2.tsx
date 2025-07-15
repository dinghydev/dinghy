import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_CONSTRAINT_2 = {
  _style:
    'edgeStyle=none;html=1;endArrow=none;align=left;labelBackgroundColor=none;',
  _width: 5,
  _height: 200,
}

export function TimeConstraint2(props: DiagramNodeProps) {
  return <Shape {...TIME_CONSTRAINT_2} {...props} />
}
