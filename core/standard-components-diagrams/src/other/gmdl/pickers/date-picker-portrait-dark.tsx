import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATE_PICKER_PORTRAIT_DARK = {
  _style: 'shape=rect;fillColor=#424242;strokeColor=#eeeeee;shadow=1;',
  _width: 328,
  _height: 484,
}

export function DatePickerPortraitDark(props: DiagramNodeProps) {
  return <Shape {...DATE_PICKER_PORTRAIT_DARK} {...props} />
}
