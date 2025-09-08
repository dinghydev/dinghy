import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.line;strokeColor=#999999;direction=north;',
  },
  _original_width: 20,
  _original_height: 100,
}

export function VerticalLine(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LINE}
      {...props}
      _style={extendStyle(VERTICAL_LINE, props)}
    />
  )
}
