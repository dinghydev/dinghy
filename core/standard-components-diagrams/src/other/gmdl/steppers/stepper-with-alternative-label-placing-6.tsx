import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6 = {
  _style: {
    entity:
      'shape=rect;fontColor=#4d4d4dlfontSize=13;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;html=1;',
  },
  _original_width: 7,
  _original_height: 50,
}

export function StepperWithAlternativeLabelPlacing6(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6}
      {...props}
      _style={extendStyle(STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6, props)}
    />
  )
}
