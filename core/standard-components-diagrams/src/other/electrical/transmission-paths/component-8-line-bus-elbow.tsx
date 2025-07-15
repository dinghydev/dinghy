import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_8_LINE_BUS_ELBOW = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.eightLineBusElbow;notch=180;',
  _width: 200,
  _height: 200,
}

export function Component8LineBusElbow(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_8_LINE_BUS_ELBOW} {...props} />
}
