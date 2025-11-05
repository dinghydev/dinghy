import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LEFT_CURLY_BRACKET = {
  _style: {
    entity:
      'shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;labelPosition=left;verticalLabelPosition=middle;align=right;verticalAlign=middle;',
  },
  _width: 20,
  _height: 120,
}

export function LeftCurlyBracket(props: NodeProps) {
  return (
    <Shape
      {...LEFT_CURLY_BRACKET}
      {...props}
      _style={extendStyle(LEFT_CURLY_BRACKET, props)}
    />
  )
}
