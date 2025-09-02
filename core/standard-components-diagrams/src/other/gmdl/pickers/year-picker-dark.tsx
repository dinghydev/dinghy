import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YEAR_PICKER_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;',
  },
  _original_width: 328,
  _original_height: 484,
}

export function YearPickerDark(props: DiagramNodeProps) {
  return (
    <Shape
      {...YEAR_PICKER_DARK}
      {...props}
      _style={extendStyle(YEAR_PICKER_DARK, props)}
    />
  )
}
