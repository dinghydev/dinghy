import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATE_PICKER_PORTRAIT = {
  _style: 'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  _width: 328,
  _height: 484,
}

export function DatePickerPortrait(props: DiagramNodeProps) {
  return <Shape {...DATE_PICKER_PORTRAIT} {...props} />
}
