import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_CURLY_BRACE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.markup.curlyBrace;whiteSpace=wrap;strokeColor=#999999;',
  _width: 100,
  _height: 20,
}

export function HorizontalCurlyBrace(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_CURLY_BRACE} {...props} />
}
