import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_3 = {
  _style: 'shape=line;strokeColor=#b3b3b3;',
  _width: 2,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing3(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_3}
      {...props}
      _style={extendStyle(STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_3, props)}
    />
  )
}
