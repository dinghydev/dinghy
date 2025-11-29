import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER_PORTRAIT_DARK = {
  _style: {
    entity: 'shape=rect;fillColor=#424242;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 328,
  _height: 484,
}

export function DatePickerPortraitDark(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATE_PICKER_PORTRAIT_DARK)} />
  )
}
