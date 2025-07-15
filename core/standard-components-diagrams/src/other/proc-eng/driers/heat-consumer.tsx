import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEAT_CONSUMER = {
  _style:
    'shape=mxgraph.pid.driers.heat_consumer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function HeatConsumer(props: DiagramNodeProps) {
  return <Shape {...HEAT_CONSUMER} {...props} />
}
