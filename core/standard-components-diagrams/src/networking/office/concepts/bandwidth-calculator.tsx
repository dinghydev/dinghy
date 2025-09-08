import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BANDWIDTH_CALCULATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.bandwidth_calculator;',
  },
  _original_width: 49,
  _original_height: 53,
}

export function BandwidthCalculator(props: DiagramNodeProps) {
  return (
    <Shape
      {...BANDWIDTH_CALCULATOR}
      {...props}
      _style={extendStyle(BANDWIDTH_CALCULATOR, props)}
    />
  )
}
