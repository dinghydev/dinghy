import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_3 = {
  _style: {
    entity: 'dashed=0;shape=line;strokeWidth=2;noLabel=1;strokeColor=#1F9BFD;',
  },
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormalLight3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SINGLE_LINE_TEXT_FIELD_NORMAL_LIGHT_3)}
    />
  )
}
