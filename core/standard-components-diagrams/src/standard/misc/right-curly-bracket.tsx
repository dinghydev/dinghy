import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RIGHT_CURLY_BRACKET = {
  _style:
    'shape=curlyBracket;whiteSpace=wrap;html=1;rounded=1;flipH=1;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;',
  _width: 20,
  _height: 120,
}

export function RightCurlyBracket(props: DiagramNodeProps) {
  return <Shape {...RIGHT_CURLY_BRACKET} {...props} />
}
