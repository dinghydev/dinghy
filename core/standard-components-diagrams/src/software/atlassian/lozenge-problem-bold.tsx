import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOZENGE_PROBLEM_BOLD = {
  _style:
    'dashed=0;html=1;rounded=1;fillColor=#BA3200;strokeColor=#BA3200;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  _width: 70,
  _height: 20,
}

export function LozengeProblemBold(props: DiagramNodeProps) {
  return <Shape {...LOZENGE_PROBLEM_BOLD} {...props} />
}
