import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_FIGURE_8_BLIND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.open_figure_8_blind2;',
  },
  _width: 20,
  _height: 80,
}

export function OpenFigure8Blind(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPEN_FIGURE_8_BLIND)} />
}
