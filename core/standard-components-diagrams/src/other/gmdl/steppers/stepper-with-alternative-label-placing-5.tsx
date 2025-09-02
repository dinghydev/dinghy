import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5 = {
  _style: {
    entity:
      'shape=ellipse;fontSize=12;strokeColor=none;fillColor=#9e9e9e;fontColor=#ffffff;html=1;',
  },
  _original_width: 6,
  _original_height: 50,
}

export function StepperWithAlternativeLabelPlacing5(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5}
      {...props}
      _style={extendStyle(STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5, props)}
    />
  )
}
