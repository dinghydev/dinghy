import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATE_PICKER_LANDSCAPE_DARK = {
  _style: {
    entity:
      'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;aspect=fixed;',
  },
  _original_width: 512,
  _original_height: 304,
}

export function DatePickerLandscapeDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATE_PICKER_LANDSCAPE_DARK}
      {...props}
      _style={extendStyle(DATE_PICKER_LANDSCAPE_DARK, props)}
    />
  )
}
