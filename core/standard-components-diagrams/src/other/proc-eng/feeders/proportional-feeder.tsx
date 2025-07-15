import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPORTIONAL_FEEDER = {
  _style:
    'shape=mxgraph.pid.feeders.proportional_feeder;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function ProportionalFeeder(props: DiagramNodeProps) {
  return <Shape {...PROPORTIONAL_FEEDER} {...props} />
}
