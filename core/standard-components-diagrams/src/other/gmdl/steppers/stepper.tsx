import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEPPER = {
  _style: {
    entity: 'shape=rect;strokeColor=none;fillColor=#ffffff;',
  },
  _width: 704,
  _height: 478,
}

export function Stepper(props: DiagramNodeProps) {
  return <Shape {...STEPPER} {...props} _style={extendStyle(STEPPER, props)} />
}
