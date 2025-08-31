import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATE_PICKER_LANDSCAPE_DARK = {
  _style:
    'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;aspect=fixed;',
  _width: 512,
  _height: 304,
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
