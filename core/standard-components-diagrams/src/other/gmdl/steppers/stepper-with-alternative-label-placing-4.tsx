import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_4 = {
  _style: {
    entity:
      'shape=ellipse;fontSize=12;strokeColor=none;fillColor=#9e9e9e;fontColor=#ffffff;align=center;verticalAlign=middle;html=1;',
  },
  _original_width: 3,
  _original_height: 50,
}

export function StepperWithAlternativeLabelPlacing4(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_4}
      {...props}
      _style={extendStyle(STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_4, props)}
    />
  )
}
