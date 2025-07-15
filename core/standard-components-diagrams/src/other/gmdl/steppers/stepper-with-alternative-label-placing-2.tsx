import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_2 = {
  _style:
    'shape=rect;fontColor=#4d4d4dlfontSize=13;strokeColor=none;fillColor=none;html=1;',
  _width: 1,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing2(props: DiagramNodeProps) {
  return <Shape {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_2} {...props} />
}
