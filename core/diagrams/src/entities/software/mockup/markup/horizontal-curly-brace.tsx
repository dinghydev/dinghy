import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_CURLY_BRACE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.curlyBrace;whiteSpace=wrap;strokeColor=#999999;',
  },
  _width: 100,
  _height: 20,
}

export function HorizontalCurlyBrace(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_CURLY_BRACE}
      {...props}
      _style={extendStyle(HORIZONTAL_CURLY_BRACE, props)}
    />
  )
}
