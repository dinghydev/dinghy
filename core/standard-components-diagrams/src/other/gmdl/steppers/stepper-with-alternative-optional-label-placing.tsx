import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING = {
  _style:
    'shape=ellipse;strokeColor=none;fillColor=#4285F4;fontColor=#ffffff;fontSize=12;align=center;verticalAlign=middle;html=1;',
  _width: 404,
  _height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING}
      {...props}
      _style={extendStyle(
        STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING,
        props,
      )}
    />
  )
}
