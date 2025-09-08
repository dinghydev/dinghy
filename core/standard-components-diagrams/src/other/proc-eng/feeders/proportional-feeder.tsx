import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROPORTIONAL_FEEDER = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.proportional_feeder;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
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
