import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_CURLY_BRACE = {
  _style: {
    entity:
      'labelPosition=right;align=left;strokeWidth=1;shape=mxgraph.mockup.markup.curlyBrace;html=1;shadow=0;dashed=0;strokeColor=#999999;direction=north;',
  },
  _width: 20,
  _height: 100,
}

export function VerticalCurlyBrace(props: NodeProps) {
  return (
    <Shape
      {...VERTICAL_CURLY_BRACE}
      {...props}
      _style={extendStyle(VERTICAL_CURLY_BRACE, props)}
    />
  )
}
