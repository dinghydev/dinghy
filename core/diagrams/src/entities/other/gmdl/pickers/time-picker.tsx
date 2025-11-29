import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TIME_PICKER = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;aspect=fixed;',
  },
  _width: 328,
  _height: 484,
}

export function TimePicker(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TIME_PICKER)} />
}
