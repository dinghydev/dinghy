import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATE_PICKER_PORTRAIT_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#424242;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 328,
  _height: 484,
}

export function DatePickerPortraitDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATE_PICKER_PORTRAIT_DARK}
      {...props}
      _style={extendStyle(DATE_PICKER_PORTRAIT_DARK, props)}
    />
  )
}
