import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const YEAR_PICKER_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;',
  },
  _width: 328,
  _height: 484,
}

export function YearPickerDark(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, YEAR_PICKER_DARK)} />
}
