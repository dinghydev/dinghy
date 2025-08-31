import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
