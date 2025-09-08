import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT = {
  _style: {
    entity: 'shape=rect;strokeColor=none;fillColor=none;',
  },
  _original_width: 346,
  _original_height: 35,
}

export function SingleLineTextFieldWithIconNormalLight(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT}
      {...props}
      _style={extendStyle(SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT, props)}
    />
  )
}
