import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_PICKER = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;aspect=fixed;',
  },
  _original_width: 328,
  _original_height: 484,
}

export function TimePicker(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_PICKER}
      {...props}
      _style={extendStyle(TIME_PICKER, props)}
    />
  )
}
