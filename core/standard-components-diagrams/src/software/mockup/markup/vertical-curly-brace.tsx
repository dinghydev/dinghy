import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_CURLY_BRACE = {
  _style:
    'labelPosition=right;align=left;strokeWidth=1;shape=mxgraph.mockup.markup.curlyBrace;html=1;shadow=0;dashed=0;strokeColor=#999999;direction=north;',
  _width: 20,
  _height: 100,
}

export function VerticalCurlyBrace(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_CURLY_BRACE} {...props} />
}
