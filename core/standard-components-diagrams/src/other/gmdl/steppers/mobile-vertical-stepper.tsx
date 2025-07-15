import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOBILE_VERTICAL_STEPPER = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function MobileVerticalStepper(props: DiagramNodeProps) {
  return <Shape {...MOBILE_VERTICAL_STEPPER} {...props} />
}
