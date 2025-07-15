import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STRAIGHT_BUS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.straightBus;',
  _width: 90,
  _height: 130,
}

export function StraightBus(props: DiagramNodeProps) {
  return <Shape {...STRAIGHT_BUS} {...props} />
}
