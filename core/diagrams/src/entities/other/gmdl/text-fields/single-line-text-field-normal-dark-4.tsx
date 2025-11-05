import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_4 = {
  _style: {
    entity: 'dashed=0;shape=line;strokeWidth=1;noLabel=1;strokeColor=#999999;',
  },
  _width: 2,
  _height: 55,
}

export function SingleLineTextFieldNormalDark4(props: NodeProps) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_4}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_NORMAL_DARK_4, props)}
    />
  )
}
