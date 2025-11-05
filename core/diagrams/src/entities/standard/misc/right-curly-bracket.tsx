import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIGHT_CURLY_BRACKET = {
  _style: {
    entity:
      'shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;flipH=1;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;',
  },
  _width: 20,
  _height: 120,
}

export function RightCurlyBracket(props: NodeProps) {
  return (
    <Shape
      {...RIGHT_CURLY_BRACKET}
      {...props}
      _style={extendStyle(RIGHT_CURLY_BRACKET, props)}
    />
  )
}
