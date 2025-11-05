import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PINPOINT_JOURNEY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.pinpoint_journey;',
  },
  _original_width: 78,
  _original_height: 75,
}

export function PinpointJourney(props: NodeProps) {
  return (
    <Shape
      {...PINPOINT_JOURNEY}
      {...props}
      _style={extendStyle(PINPOINT_JOURNEY, props)}
    />
  )
}
