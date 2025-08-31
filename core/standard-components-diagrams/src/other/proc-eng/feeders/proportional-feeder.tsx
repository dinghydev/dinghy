import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPORTIONAL_FEEDER = {
  _style:
    'shape=mxgraph.pid.feeders.proportional_feeder;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function ProportionalFeeder(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROPORTIONAL_FEEDER}
      {...props}
      _style={extendStyle(PROPORTIONAL_FEEDER, props)}
    />
  )
}
