import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROPORTIONAL_FEEDER_METERING = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.proportional_feeder_(metering);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 300,
  _height: 50,
}

export function ProportionalFeederMetering(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PROPORTIONAL_FEEDER_METERING)}
    />
  )
}
