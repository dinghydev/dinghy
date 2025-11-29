import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_ON_PREMISE_SOLUTION_BOX = {
  _style: {
    entity:
      'strokeColor=#0070F2;shadow=0;strokeWidth=2;rounded=1;absoluteArcSize=1;arcSize=20;',
  },
  _width: 0,
  _height: 70,
}

export function SapOnPremiseSolutionBox(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SAP_ON_PREMISE_SOLUTION_BOX)}
    />
  )
}
