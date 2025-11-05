import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOSED_FIGURE_8_BLIND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.closed_figure_8_blind2;',
  },
  _width: 20,
  _height: 80,
}

export function ClosedFigure8Blind(props: NodeProps) {
  return (
    <Shape
      {...CLOSED_FIGURE_8_BLIND}
      {...props}
      _style={extendStyle(CLOSED_FIGURE_8_BLIND, props)}
    />
  )
}
