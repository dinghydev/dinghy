import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PINPOINT_JOURNEY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.pinpoint_journey;',
  _width: 78,
  _height: 75,
}

export function PinpointJourney(props: DiagramNodeProps) {
  return <Shape {...PINPOINT_JOURNEY} {...props} />
}
