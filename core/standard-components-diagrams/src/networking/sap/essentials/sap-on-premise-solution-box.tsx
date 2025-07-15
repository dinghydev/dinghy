import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_ON_PREMISE_SOLUTION_BOX = {
  _style:
    'strokeColor=#0070F2;shadow=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=20;',
  _width: 0,
  _height: 70,
}

export function SapOnPremiseSolutionBox(props: DiagramNodeProps) {
  return <Shape {...SAP_ON_PREMISE_SOLUTION_BOX} {...props} />
}
