import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPEN_FIGURE_8_BLIND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.open_figure_8_blind2;',
  },
  _original_width: 20,
  _original_height: 80,
}

export function OpenFigure8Blind(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPEN_FIGURE_8_BLIND}
      {...props}
      _style={extendStyle(OPEN_FIGURE_8_BLIND, props)}
    />
  )
}
