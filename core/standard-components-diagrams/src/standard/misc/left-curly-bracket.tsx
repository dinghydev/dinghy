import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEFT_CURLY_BRACKET = {
  _style:
    'shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;',
  _width: 20,
  _height: 120,
}

export function LeftCurlyBracket(props: DiagramNodeProps) {
  return (
    <Shape
      {...LEFT_CURLY_BRACKET}
      {...props}
      _style={extendStyle(LEFT_CURLY_BRACKET, props)}
    />
  )
}
