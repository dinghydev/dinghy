import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_LINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.line;strokeColor=#999999;',
  },
  _width: 100,
  _height: 20,
}

export function HorizontalLine(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_LINE}
      {...props}
      _style={extendStyle(HORIZONTAL_LINE, props)}
    />
  )
}
