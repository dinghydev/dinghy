import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINE_CABLE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.line_cable;',
  _width: 130,
  _height: 60,
}

export function LineCable(props: DiagramNodeProps) {
  return <Shape {...LINE_CABLE} {...props} />
}
