import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YEAR_PICKER_DARK = {
  _style: 'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;',
  _width: 328,
  _height: 484,
}

export function YearPickerDark(props: DiagramNodeProps) {
  return <Shape {...YEAR_PICKER_DARK} {...props} />
}
