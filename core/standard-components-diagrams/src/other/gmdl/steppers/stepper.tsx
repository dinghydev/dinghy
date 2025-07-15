import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEPPER = {
  _style: 'shape=rect;strokeColor=none;fillColor=#ffffff;',
  _width: 704,
  _height: 478,
}

export function Stepper(props: DiagramNodeProps) {
  return <Shape {...STEPPER} {...props} />
}
