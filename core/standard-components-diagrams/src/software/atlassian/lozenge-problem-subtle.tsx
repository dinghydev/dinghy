import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_PROBLEM_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#BA3200;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#BA3200',
  },
  _width: 70,
  _height: 20,
}

export function LozengeProblemSubtle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_PROBLEM_SUBTLE}
      {...props}
      _style={extendStyle(LOZENGE_PROBLEM_SUBTLE, props)}
    />
  )
}
