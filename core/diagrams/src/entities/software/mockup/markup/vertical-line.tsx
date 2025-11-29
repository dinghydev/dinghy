import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.line;strokeColor=#999999;direction=north;',
  },
  _width: 20,
  _height: 100,
}

export function VerticalLine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LINE)} />
}
