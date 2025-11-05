import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLANK_TWO_AND_THREE_LINE = {
  _style: {
    entity:
      'dashed=0;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;labelPosition=center;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=5;fontSize=12;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 44,
}

export function BlankTwoAndThreeLine(props: NodeProps) {
  return (
    <Shape
      {...BLANK_TWO_AND_THREE_LINE}
      {...props}
      _style={extendStyle(BLANK_TWO_AND_THREE_LINE, props)}
    />
  )
}
