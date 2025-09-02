import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPORTIONAL_FEEDER_METERING = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.proportional_feeder_(metering);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 300,
  _original_height: 50,
}

export function ProportionalFeederMetering(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROPORTIONAL_FEEDER_METERING}
      {...props}
      _style={extendStyle(PROPORTIONAL_FEEDER_METERING, props)}
    />
  )
}
