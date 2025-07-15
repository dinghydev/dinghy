import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BANDWIDTH_CALCULATOR = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.bandwidth_calculator;',
  _width: 49,
  _height: 53,
}

export function BandwidthCalculator(props: DiagramNodeProps) {
  return <Shape {...BANDWIDTH_CALCULATOR} {...props} />
}
