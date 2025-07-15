import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_2_LINE_BUS = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.2_line_bus;',
  _width: 130,
  _height: 25,
}

export function Component2LineBus(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_2_LINE_BUS} {...props} />
}
