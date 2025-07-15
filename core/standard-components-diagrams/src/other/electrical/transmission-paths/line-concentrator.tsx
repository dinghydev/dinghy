import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINE_CONCENTRATOR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.line_concentrator;',
  _width: 130,
  _height: 130,
}

export function LineConcentrator(props: DiagramNodeProps) {
  return <Shape {...LINE_CONCENTRATOR} {...props} />
}
