import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIGHT_CURLY_BRACKET = {
  _style: {
    entity:
      'shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;flipH=1;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;',
  },
  _original_width: 20,
  _original_height: 120,
}

export function RightCurlyBracket(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIGHT_CURLY_BRACKET}
      {...props}
      _style={extendStyle(RIGHT_CURLY_BRACKET, props)}
    />
  )
}
