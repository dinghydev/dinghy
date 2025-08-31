import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_LINE_TEXT_FIELD_WITH_ICON_NORMAL_LIGHT = {
  _style: 'shape=rect;strokeColor=none;fillColor=none;',
  _width: 346,
  _height: 35,
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
