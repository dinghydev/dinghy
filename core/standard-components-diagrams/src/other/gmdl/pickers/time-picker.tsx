import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIME_PICKER = {
  _style:
    'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;aspect=fixed;',
  _width: 328,
  _height: 484,
}

export function TimePicker(props: DiagramNodeProps) {
  return <Shape {...TIME_PICKER} {...props} />
}
