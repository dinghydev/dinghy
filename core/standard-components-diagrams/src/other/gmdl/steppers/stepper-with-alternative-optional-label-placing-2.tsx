import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_2 = {
  _style: {
    entity:
      'shape=ellipse;strokeColor=none;fillColor=#9e9e9e;fontColor=#ffffff;fontSize=12;align=center;verticalAlign=middle;html=1;',
  },
  _original_width: 3,
  _original_height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing2(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_2}
      {...props}
      _style={extendStyle(
        STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_2,
        props,
      )}
    />
  )
}
