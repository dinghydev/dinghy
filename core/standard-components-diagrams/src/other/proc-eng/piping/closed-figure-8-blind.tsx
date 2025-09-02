import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOSED_FIGURE_8_BLIND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.closed_figure_8_blind2;',
  },
  _original_width: 20,
  _original_height: 80,
}

export function ClosedFigure8Blind(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOSED_FIGURE_8_BLIND}
      {...props}
      _style={extendStyle(CLOSED_FIGURE_8_BLIND, props)}
    />
  )
}
