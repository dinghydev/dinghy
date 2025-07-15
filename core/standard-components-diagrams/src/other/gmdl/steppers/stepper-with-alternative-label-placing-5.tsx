import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5 = {
  _style:
    'shape=ellipse;fontSize=12;strokeColor=none;fillColor=#9e9e9e;fontColor=#ffffff;html=1;',
  _width: 6,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing5(props: DiagramNodeProps) {
  return <Shape {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5} {...props} />
}
