import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROPORTIONAL_FEEDER_ROTARY_VALVE = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.proportional_feeder_(rotary_valve);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ProportionalFeederRotaryValve(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PROPORTIONAL_FEEDER_ROTARY_VALVE)}
    />
  )
}
