import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOZENGE_PROBLEM_SUBTLE = {
  _style:
    'dashed=0;html=1;rounded=1;strokeColor=#BA3200;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#BA3200',
  _width: 70,
  _height: 20,
}

export function LozengeProblemSubtle(props: DiagramNodeProps) {
  return <Shape {...LOZENGE_PROBLEM_SUBTLE} {...props} />
}
