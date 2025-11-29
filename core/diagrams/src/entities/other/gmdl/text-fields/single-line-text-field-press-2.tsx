import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_PRESS_2 = {
  _style: {
    entity:
      'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#0C8CF2;opacity=50;',
  },
  _width: 1,
  _height: 35,
}

export function SingleLineTextFieldPress2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SINGLE_LINE_TEXT_FIELD_PRESS_2)}
    />
  )
}
