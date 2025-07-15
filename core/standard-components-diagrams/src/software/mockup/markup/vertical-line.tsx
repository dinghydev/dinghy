import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_LINE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.line;strokeColor=#999999;direction=north;',
  _width: 20,
  _height: 100,
}

export function VerticalLine(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_LINE} {...props} />
}
