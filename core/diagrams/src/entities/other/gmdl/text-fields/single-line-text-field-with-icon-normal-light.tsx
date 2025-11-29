import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT = {
  _style: {
    entity: 'shape=rect;strokeColor=none;fillColor=none;',
  },
  _width: 346,
  _height: 35,
}

export function SingleLineTextFieldWithIconNormalLight(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT)}
    />
  )
}
