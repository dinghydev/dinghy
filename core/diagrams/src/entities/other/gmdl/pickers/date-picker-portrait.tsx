import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER_PORTRAIT = {
  _style: {
    entity: 'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 328,
  _height: 484,
}

export function DatePickerPortrait(props: NodeProps) {
  return (
    <Shape
      {...DATE_PICKER_PORTRAIT}
      {...props}
      _style={extendStyle(DATE_PICKER_PORTRAIT, props)}
    />
  )
}
