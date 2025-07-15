import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_3 = {
  _style:
    'shape=rect;strokeColor=none;fillColor=none;html=1;verticalAlign=top;fontColor=#4d4d4dlfontSize=13;spacingTop=-4;',
  _width: 4,
  _height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing3(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_3} {...props} />
  )
}
