import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER_LANDSCAPE_DARK = {
  _style: {
    entity:
      'shape=rect;fillColor=#424242;strokeColor=none;shadow=1;aspect=fixed;',
  },
  _width: 512,
  _height: 304,
}

export function DatePickerLandscapeDark(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATE_PICKER_LANDSCAPE_DARK)} />
  )
}
