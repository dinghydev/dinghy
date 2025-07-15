import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_3_LINE_BUS_ELBOW = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.threeLineBusElbow;notch=30;',
  _width: 120,
  _height: 120,
}

export function Component3LineBusElbow(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_3_LINE_BUS_ELBOW} {...props} />
}
