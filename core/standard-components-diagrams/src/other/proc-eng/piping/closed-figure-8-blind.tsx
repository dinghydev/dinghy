import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOSED_FIGURE_8_BLIND = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.closed_figure_8_blind2;',
  _width: 20,
  _height: 80,
}

export function ClosedFigure8Blind(props: DiagramNodeProps) {
  return <Shape {...CLOSED_FIGURE_8_BLIND} {...props} />
}
